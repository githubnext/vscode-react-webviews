import { defineConfig } from 'vite'
const path = require('path')

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  // root: 'src/webviews',
  publicDir: 'src/webviews/public',
  build: {
    outDir: 'out/webviews',
    target: 'esnext',
    minify: 'esbuild',
    lib: {
      entry: path.resolve(__dirname, 'src/webviews/src/index.tsx'),
      name: 'VSWebview',
      formats: ['es'],
      fileName: 'index',
    },
    watch: {}, // yes, this is correct
  },
})
