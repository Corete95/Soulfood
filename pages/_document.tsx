import { Html, Head, Main, NextScript } from 'next/document';
import Providers from './Providers';
import GlobalStyles from '@/styles/GlobalStyles';

export default function Document(props: React.PropsWithChildren) {
  return (
    <Html>
      <Head />
      <body>
        <Providers>
          <GlobalStyles />
          {props.children}
          <Main />
          <div id="modal-root" />
          <NextScript />
        </Providers>
      </body>
    </Html>
  );
}
