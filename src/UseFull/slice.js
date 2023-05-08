export function Slice(text) {
  if (text?.length > 52) {
    return `${text?.slice(0, 52)}...`;
  }
  return text;
}
