// Turns data into the text used for search-engine "structured data".
// The "<" character is escaped so the text can never close the script tag it is placed in.
export function jsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
