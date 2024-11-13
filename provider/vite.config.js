import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
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
    base: "/bmstu_iu5_web_frontend/",
    server: {
        port: 3000,
        proxy: {
            "/api": {
                target: "http://localhost:8090",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/api'),
            },
        },
    },
});