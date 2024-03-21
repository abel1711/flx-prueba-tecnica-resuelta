import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@components", replacement: path.resolve(__dirname, "src/presentation/components") },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/presentation/hooks") },
      { find: "@redux", replacement: path.resolve(__dirname, "src/presentation/redux") },
      { find: "@router", replacement: path.resolve(__dirname, "src/presentation/router") },
      { find: "@screens", replacement: path.resolve(__dirname, "src/presentation/screens") },
      { find: "@config", replacement: path.resolve(__dirname, "src/config") },
    ],
  },
})
