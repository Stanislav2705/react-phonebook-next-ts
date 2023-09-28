import React, { ReactNode } from 'react';
import { theme } from '@/theme';
import { ThemeProvider } from '@emotion/react';

interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  return (
    <ThemeProvider theme={theme} children={undefined}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;