// =============================================================================
// Phenotype Hub — VitePress Configuration
// =============================================================================
//
// Config values are read from environment variables with sensible defaults.
// Copy .env.example → .env and adjust values for local overrides.
//
// Environment variables are prefixed with PH_ (Phenotype Hub).
// See docs/config/CONFIG.md for the full reference.
// =============================================================================

import { defineConfig } from 'vitepress'
import { readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// --- Minimal .env loader (no dotenv dependency) ------------------------------
const __dirname = dirname(fileURLToPath(import.meta.url))
const envPath = resolve(__dirname, '..', '.env')

if (existsSync(envPath)) {
  const content = readFileSync(envPath, 'utf-8')
  for (const line of content.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue
    const eqIdx = trimmed.indexOf('=')
    const key = trimmed.slice(0, eqIdx).trim()
    let value = trimmed.slice(eqIdx + 1).trim()
    // Strip surrounding quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (key && !process.env[key]) {
      process.env[key] = value
    }
  }
}

// --- Helper: read optional env var with fallback -----------------------------
function env(key, fallback) {
  return process.env[key] ?? fallback
}

// --- Helper: parse JSON env var with fallback --------------------------------
function envJSON(key, fallback) {
  const raw = process.env[key]
  if (!raw) return fallback
  try {
    return JSON.parse(raw)
  } catch {
    console.warn(`[config.mjs] Warning: PH_NAV_LINKS is not valid JSON, using defaults`)
    return fallback
  }
}

// --- Resolved configuration --------------------------------------------------
const siteTitle = env('PH_SITE_TITLE', 'Phenotype Hub')
const siteDescription = env('PH_SITE_DESCRIPTION', 'Phenotype Hub documentation')
const srcDir = env('PH_SRC_DIR', 'docs')
const faviconPath = env('PH_FAVICON_PATH', '/favicon.ico')
const githubUrl = env('PH_GITHUB_URL', 'https://github.com/KooshaPari/phenotype-hub')

const navLinks = envJSON('PH_NAV_LINKS', [
  { text: 'Home', link: '/' },
  { text: 'Journeys', link: '/journeys/' },
  { text: 'Operations', link: '/operations/' },
  { text: 'Worklogs', link: '/worklogs/' }
])

// --- Export VitePress config -------------------------------------------------
export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  srcDir,
  head: [
    ['link', { rel: 'icon', href: faviconPath }]
  ],
  themeConfig: {
    nav: navLinks,
    sidebar: {
      '/journeys/': [{ items: [] }],
      '/operations/': [{ items: [] }],
      '/worklogs/': [{ items: [] }]
    },
    socialLinks: [
      { icon: 'github', link: githubUrl }
    ]
  }
})
