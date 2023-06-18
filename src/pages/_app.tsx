import '@/assets/styles/globals.css';
import type { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';
import { AuthProvider } from '../hooks/useAuth';
import { ModalProvider } from '../context/ModalContext';

export default function App({ Component, pageProps }: AppProps) {
  return <ModalProvider>
    <AuthProvider>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </AuthProvider>
  </ModalProvider>;

}
