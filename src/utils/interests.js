export function cleanInterests(value) {
  if (value === undefined) return undefined;
  const list = Array.isArray(value) ? value : String(value).split(',');
  const cleaned = list.map((i) => String(i).trim().toLowerCase()).filter(Boolean);
  return [...new Set(cleaned)];
}
