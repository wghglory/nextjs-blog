// global styles only work in _app.js
// restart dev server

import '../styles/global.css';
// import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
