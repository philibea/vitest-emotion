import '@emotion/react';
import { consoleLightTheme } from '@ultraviolet/themes'
type CutomTheme = typeof consoleLightTheme

declare module '@emotion/react' {
  export interface Theme extends CutomTheme {}
}
