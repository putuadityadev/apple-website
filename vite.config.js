import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-ty",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "jsm-ty",
    project: "apple"
  })],
  base: "/apple-website/",
  build: {
    sourcemap: true
  }
})