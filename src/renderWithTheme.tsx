import React from 'react';
import createCache from '@emotion/cache';
import { createSerializer } from '@emotion/jest';
import { render } from '@testing-library/react';
import { consoleLightTheme } from '@ultraviolet/themes';
import { CacheProvider, ThemeProvider } from '@emotion/react';

const emotionCache = createCache({
  key: 'cache',
});

emotionCache.compat = true;

export const renderWithTheme = (children: React.ReactNode) => {
  expect.addSnapshotSerializer(createSerializer());

  return render(
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={consoleLightTheme}>{children}</ThemeProvider>
    </CacheProvider>,
  );
};
