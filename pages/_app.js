import '../styles/global.css'; // Your Tailwind styles
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
