// global styles only work in _app.js
// restart dev server

import '../styles/global.css';
// import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
