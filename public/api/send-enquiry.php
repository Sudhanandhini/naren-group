<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

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

$subject = '=?UTF-8?B?' . base64_encode('New enquiry — Naren Groups (' . $name . ')') . '?=';

$body = '
    <h2>New website enquiry</h2>
    <p><strong>Name:</strong> ' . htmlspecialchars($name) . '</p>
    <p><strong>Phone:</strong> ' . htmlspecialchars($phone) . '</p>
    <p><strong>Location:</strong> ' . htmlspecialchars($location) . '</p>
    <p><strong>Project type:</strong> ' . htmlspecialchars($type) . '</p>
    <p><strong>Approx. length:</strong> ' . htmlspecialchars($length) . '</p>
    <p><strong>Message:</strong><br>' . nl2br(htmlspecialchars($message)) . '</p>
';

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ' . $config['from_name'] . ' <' . $config['from_email'] . '>',
    'Reply-To: ' . $config['from_email'],
];

$sent = mail($config['to_email'], $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Mail could not be sent']);
}
