import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/edusity-landing-page/', // Thay "edusity-landing-page" bằng tên repository của bạn
  plugins: [react()],
});
