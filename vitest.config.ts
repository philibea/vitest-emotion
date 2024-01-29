import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.mjs';

//https://vitest.dev/config/#configuration
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      name: 'web',
      globals: true,
      environment: 'jsdom',
      allowOnly: false,
      //   setupFiles: './setupTests.ts',
    },
  }),
);
