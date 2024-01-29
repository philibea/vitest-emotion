import { ThemeProvider } from '@emotion/react';
import { consoleLightTheme } from '@ultraviolet/themes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={consoleLightTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
