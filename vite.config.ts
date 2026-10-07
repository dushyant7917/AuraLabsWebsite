import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Besides VITE_*, expose only GOOGLE_CLIENT_ID to client code (a public OAuth client ID, not a secret).
  envPrefix: ["VITE_", "GOOGLE_CLIENT_ID"],
})
