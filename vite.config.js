import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

Server: {
  proxy: {
    '/': 'https://reactmovies.surge.sh/' // Cambia localhost:3000 por el dominio de Surge de tu aplicación
  },
  fs: {
    strict: false,
    // Agrega las siguientes líneas para servir la página 404.html cuando no se encuentra una página
    fallback: {
      '404.html': '/404.html'
    }
  }
}
})



