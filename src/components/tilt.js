// Shared 3D tilt-on-hover handlers for `.tilt` wrapped visuals.
export function handleTilt(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  card.style.setProperty('--ry', `${x * 10}deg`)
  card.style.setProperty('--rx', `${-y * 10}deg`)
}
export function resetTilt(e) {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}
