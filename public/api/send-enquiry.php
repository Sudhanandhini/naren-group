<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$config = require __DIR__ . '/config.php';

$input = json_decode(file_get_contents('php://input'), true) ?: [];

$clean = function ($v) {
    $v = is_string($v) ? trim($v) : '';
    return str_replace(["\r", "\n"], ' ', $v);
};

$name     = $clean($input['name'] ?? '');
$phone    = $clean($input['phone'] ?? '');
$location = $clean($input['location'] ?? '') ?: '-';
$type     = $clean($input['type'] ?? '') ?: '-';
$length   = $clean($input['length'] ?? '') ?: '-';
$message  = is_string($input['message'] ?? null) ? trim($input['message']) : '';
$message  = $message !== '' ? $message : '-';

if ($name === '' || !preg_match('/^[0-9+\s-]{7,15}$/', $phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid name or phone']);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_pass'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $config['smtp_port'];

    $mail->setFrom($config['smtp_user'], 'Naren Groups Website');
    $mail->addAddress($config['to_email']);

    $mail->isHTML(true);
    $mail->Subject = 'New enquiry — Naren Groups (' . $name . ')';
    $mail->Body    = '
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ' . htmlspecialchars($name) . '</p>
        <p><strong>Phone:</strong> ' . htmlspecialchars($phone) . '</p>
        <p><strong>Location:</strong> ' . htmlspecialchars($location) . '</p>
        <p><strong>Project type:</strong> ' . htmlspecialchars($type) . '</p>
        <p><strong>Approx. length:</strong> ' . htmlspecialchars($length) . '</p>
        <p><strong>Message:</strong><br>' . nl2br(htmlspecialchars($message)) . '</p>
    ';
    $mail->AltBody = "New enquiry\nName: $name\nPhone: $phone\nLocation: $location\nProject type: $type\nLength: $length\nMessage: $message";

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(
        ['success' => false, 'error' => 'Mail could not be sent', 'debug' => $mail->ErrorInfo, 'exception' => $e->getMessage()],
        JSON_INVALID_UTF8_SUBSTITUTE
    );
}
