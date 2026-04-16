export function splitIntoParagraphs(text) {
  return text.trim().split('\n').filter(Boolean)
}