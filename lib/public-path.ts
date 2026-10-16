export function publicPath(path: string) {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

  if (!base || path.startsWith(`${base}/`) || path.startsWith("http")) {
    return path;
  }

  return `${base}${path}`;
}
