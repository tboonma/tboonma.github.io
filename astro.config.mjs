import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://tawanb.dev',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
    inlineStylesheets: 'auto'
  }
})
