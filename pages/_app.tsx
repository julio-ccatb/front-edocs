import 'normalize.css';
import '../styles/styles.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>Menu</div>
      <div>Slider</div>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
