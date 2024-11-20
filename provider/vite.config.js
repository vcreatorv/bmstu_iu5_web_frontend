import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
    clearScreen: false,
    plugins: [
        react(), 
        VitePWA({ 
          registerType: 'autoUpdate',
          includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
          manifest: {
            name: 'Internet Service Provider',
            short_name: 'NET4Y',
            description: "App for for connecting the provider's services",
            theme_color: '#FED305',
            background_color: '#FED305', 
            icons: [
                {
                    src: 'pwa-64x64.png?v=1',
                    sizes: '64x64',
                    type: 'image/png'
                },
                {
                    src: 'pwa-192x192.png?v=1',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'pwa-512x512.png?v=1',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any',
                },
                {
                    src: 'maskable-icon-512x512.png?v=1',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'maskable',
                    background_color: '#FED305'
                }
            ],
          }, 
        })
    ],
    server: {
        host: true,
        port: 3000,
        proxy: {
            "/api": {
                target: "http://192.168.1.24:8090",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/api'),
            },
            "/lab1": {
                target: "http://192.168.1.24:9000",
                changeOrigin: true,
            }
        },
    },

    // Env variables starting with the item of `envPrefix` will be exposed in tauri's source code through `import.meta.env`.
    envPrefix: ['VITE_', 'TAURI_ENV_*'],
    build: {
    // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target:
      process.env.TAURI_ENV_PLATFORM == 'windows'
        ? 'chrome105'
        : 'safari13',
    // don't minify for debug builds
    minify: !process.env.TAURI_ENV_DEBUG ? 'esbuild' : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_ENV_DEBUG,
    },
});