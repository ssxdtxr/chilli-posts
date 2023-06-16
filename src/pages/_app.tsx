import '@/assets/styles/globals.css';
import type {AppProps} from 'next/app';
import {SnackbarProvider} from 'notistack';
import {AuthProvider} from "../hooks/useAuth";

export default function App({Component, pageProps}: AppProps) {
    return <AuthProvider>
        <SnackbarProvider>
            <Component {...pageProps} />
        </SnackbarProvider>
    </AuthProvider>
}
