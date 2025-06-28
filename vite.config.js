import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    
    alias: {
      'module': false, 
      'path': false,
      'fs': false
    }
  },
  optimizeDeps: {
    exclude: ['module', 'fs', 'path'] 
  }
});