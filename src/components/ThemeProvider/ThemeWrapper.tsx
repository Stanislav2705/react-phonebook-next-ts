import React, { FC, PropsWithChildren} from 'react';
import { theme } from '@/theme';
import { ThemeProvider } from '@emotion/react';


const ThemeWrapper: FC<PropsWithChildren<unknown>> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;