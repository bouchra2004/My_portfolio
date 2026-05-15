/** Préfixe correct pour les fichiers dans `public/` (ex. GitHub Pages avec `base`). */
export function publicAssetUrl(path: string): string {
  if (!path.startsWith('/')) return path
  const base = import.meta.env.BASE_URL
  if (base === '/') return path
  const trimmed = base.endsWith('/') ? base.slice(0, -1) : base
  return `${trimmed}${path}`
}
