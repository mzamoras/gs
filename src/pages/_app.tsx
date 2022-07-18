import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import theme from '../frontend/themes/default';

type Page<P = unknown> = NextPage<P> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
  layout?: React.ReactNode;
};

type Props = AppProps & {
  Component: Page;
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
