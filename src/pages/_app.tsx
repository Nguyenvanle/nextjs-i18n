import type { AppProps } from "next/app";

import { appWithTranslation } from "next-i18next";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { inter, poppins } from "~/constants";

import { queryClient } from "~/libs";

import { Toaster } from "~/components/ui";

import nextI18NextConfig from "../../next-i18next.config";

import "~/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <main className={`antialiased ${poppins.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default appWithTranslation(App, nextI18NextConfig);
