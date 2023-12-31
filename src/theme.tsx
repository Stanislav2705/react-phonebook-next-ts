export interface Theme {
  breakpoints: string[];
  colors: {
    black: string;
    white: string;
    text: string;
    primary: string;
    secondary: string;
    error: string;
  };
  space: number[];
  fontSizes: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
  fontWeights: {
    normal: number;
    semibold: number;
    bold: number;
  };
  borders: {
    none: string;
    normal: string;
  };
  radii: {
    none: string;
    normal: string;
  };
  shadows: {
    normal: string;
  };
}

export const theme: Theme = {
    breakpoints: ['440px'],
    colors: {
      black: '#000',
      white: '#fff',
      text: '#2a2a2a',
      primary: '#ffa500',
      secondary: '#ffa500',
      error: '#ff0000',
    },
    space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
    fontSizes: {
      xs: '14px',
      s: '16px',
      m: '20px',
      l: '26px',
      xl: '32px',
    },
    fontWeights: {
      normal: 400,
      semibold: 500,
      bold: 700,
    },
    borders: {
      none: 'none',
      normal: '1px solid',
    },
    radii: {
      none: '0',
      normal: '4px',
    },
    shadows: {
      normal: '0px 0px 2px 2px rgba(0 0 0 / 0.1)',
    },
  };