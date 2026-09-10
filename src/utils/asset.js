// Prefixes public/ paths with the configured base path (see VITE_BASE_PATH),
// since Vite doesn't rewrite hardcoded string paths to public assets.
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
