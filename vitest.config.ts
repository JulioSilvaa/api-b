import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    // setupFiles: ['./src/tests'],
    include: [
      'src/**/*.{test,spec}.{js,ts}',
      // 'tests/**/*.{test,spec}.{js,ts}'
    ],
    exclude: [
      'node_modules',
      'dist',
      'build'
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'coverage/**',
        'dist/**',
        'node_modules/**',
        'src/main/**', // ponto de entrada
        '**/*.d.ts',
        '**/*.config.*',
        '**/test/**'
      ]
    },
    testTimeout: 10000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@domain': resolve(__dirname, './src/domain'),
      '@application': resolve(__dirname, './src/application'),
      '@infrastructure': resolve(__dirname, './src/infrastructure'),
      '@presentation': resolve(__dirname, './src/presentation'),
      '@test': resolve(__dirname, './src/test')
    }
  }
})