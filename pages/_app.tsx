import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=UA-213502733-1`}
			/>

			<Script strategy="lazyOnload" id="">
				{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-213502733-1', {
    page_path: window.location.pathname,
  });
      `}
			</Script>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
