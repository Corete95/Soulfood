import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import SEO from '../seo.config';
import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';
import GlobalModal from '@/components/common/GlobalModal';
import GlobalStyles from '@/styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
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
        <GlobalStyles />
        <Component {...pageProps} />
        <GlobalModal />
        <ToastContainer />
      </RecoilRoot>
    </>
  );
}
