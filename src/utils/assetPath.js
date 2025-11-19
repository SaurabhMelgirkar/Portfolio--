/**
 * Get the correct asset path for public assets
 * Handles base path for GitHub Pages deployment
 */
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Vite automatically handles public folder assets with base path
  // For public folder assets, we can use the path directly
  // Vite will resolve it correctly during build
  return `/${cleanPath}`
}

/**
 * Get asset path with base URL prefix
 * Use this for assets that need the base path explicitly
 */
export const getAssetPathWithBase = (path) => {
  const base = import.meta.env.BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}

