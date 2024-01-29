import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      include: ['node_modules/'],
      jsxRuntime: 'automatic',
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: [
          [
            '@emotion',
            {
              sourceMap: true,
              autoLabel: 'dev-only',
              labelFormat: '[local]',
              cssPropOptimization: true,
            },
          ],
        ],
      },
    }),
  ],
});
