import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ToastContainer } from 'react-toastify';
import SEO from '../seo.config';
import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `,
        }}
      />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
