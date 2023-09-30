import "@/styles/globals.css";
import { Open_Sans } from "next/font/google";
import { StepContextProvider } from "@/context/StepContext";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-openSans" });

export default function App({ Component, pageProps }) {
  return (
    <StepContextProvider>
      <main className={openSans.variable}>
        <Component {...pageProps} />
      </main>
    </StepContextProvider>
  );
}
