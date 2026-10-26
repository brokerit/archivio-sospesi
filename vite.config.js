import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// heic2any (conversione foto iPhone) è caricato solo quando serve
export default defineConfig({ plugins: [react()], build: { chunkSizeWarningLimit: 1500 } })
