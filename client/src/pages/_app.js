import { Open_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { StepContextProvider } from "@/context/StepContext";
import "@/styles/globals.css";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-openSans" });

export default function App({ Component, pageProps }) {
  return (
    <StepContextProvider>
      <Header />
      <main className={openSans.variable}>
        <Component {...pageProps} />
      </main>
    </StepContextProvider>
  );
}
