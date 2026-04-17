export function splitIntoParagraphs(text) {
  return text.trim().split('\n').filter(Boolean)
}

export function renderWithHighlights(text) {
  const parts = text.split(/\[([^\]]+)\]/)
  return parts.map((part, i) =>
    i % 2 === 1 ? <span key={i} className="highlight">{part}</span> : part
  )
}