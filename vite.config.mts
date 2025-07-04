import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import FullReload from 'vite-plugin-full-reload';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'app/frontend',
  plugins: [
    RubyPlugin(),
    react(),
    FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 200 }),
  ],
  server: {
    host: 'localhost',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
      port: 3036,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app/frontend'),
      '@hotwired/turbo-rails':
        '/path/to/your/node_modules/@hotwired/turbo-rails',
      '@hotwired/stimulus': '/path/to/your/node_modules/@hotwired/stimulus',
    },
  },
});
