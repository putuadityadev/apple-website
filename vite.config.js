import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'

  return {
    base: isProduction ? "/apple-website/" : "/",
    plugins: [
      react(), 
      sentryVitePlugin({
        org: "jsm-ty",
        project: "javascript-react",
        // Tambahkan konfigurasi release
        release: {
          name: `apple-website@${process.env.npm_package_version}`,
          // Hanya aktif di production
          enabled: isProduction
        },
        sourceMaps: {
          // Pastikan source map di-upload
          uploadSourceMaps: isProduction
        }
      })
    ],
    build: {
      // Source map hanya di production
      sourcemap: isProduction
    },
    // Tambahkan konfigurasi resolve untuk assets
    resolve: {
      alias: {
        '@': '/src',
        '@public': '/public'
      }
    }
  }
})