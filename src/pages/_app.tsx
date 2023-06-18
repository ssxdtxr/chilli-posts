import '@/assets/styles/globals.scss';
import type { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';
import { AuthProvider } from '../hooks/useAuth';
import { RequireAuth } from '@/components/RequireAuth/RequareAuth';
import { NoRequireAuth } from '@/components/NoRequireAuth/NoRequieAuth';
import { useRouter } from 'next/router';

const availablePages = ['/login'];
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  console.log(router.pathname, availablePages.includes(router.pathname));
  return <AuthProvider>
    <SnackbarProvider>
      {
        availablePages.includes(router.pathname) ?
          <NoRequireAuth>
            <Component {...pageProps} />
          </NoRequireAuth>
          :
          <RequireAuth>
            <Component {...pageProps} />
          </RequireAuth>
      }
    </SnackbarProvider>
  </AuthProvider>;

}
