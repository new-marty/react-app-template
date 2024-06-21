import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const ROOT_DIR_PATH = resolve(__dirname, './');
const PUBLIC_ASSETS_DIR_PATH = resolve(__dirname, 'static');
const OUTPUT_DIR_PATH = resolve(__dirname, 'build');

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: OUTPUT_DIR_PATH,
  },
  define: {
    global: 'window',
  },
  envDir: './',
  plugins: [react(), tsconfigPaths()],
  publicDir: PUBLIC_ASSETS_DIR_PATH,
  root: ROOT_DIR_PATH,
  server: {
    host: true,
    open: true,
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
});
