import "@/styles/globals.css";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";

import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/700.css";
import "@fontsource/figtree/900.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";

const chakraTheme: ThemeConfig = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#000000",
        overflowX: "hidden",
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Figtree', sans-serif`,
  },
  colors: {
    brand: {
      black: "#000000",
      white: "#f2f2f2",
      pink: "#DF3285",
      darkBlue: "#3D89E5",
      gray: "#888888",
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={chakraTheme}>
      <Layout title="SplashX - Earn by Creating & Watching AI-generated Anime">
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
