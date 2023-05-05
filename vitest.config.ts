import * as path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@modules': path.resolve(__dirname, 'src', 'shared', 'modules'),
      '@subdomains': path.resolve(__dirname, 'src', 'subdomains'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**/*.spec.{integration,unit}.{ts,tsx}'],
    setupFiles: './setup-tests.ts',
  },
})
