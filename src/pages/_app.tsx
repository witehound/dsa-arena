import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DSArena</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

        <meta
          name="description"
          content="Web application that contains DSA problems and solutions"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
