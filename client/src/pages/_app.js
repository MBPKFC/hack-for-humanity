import { StepContextProvider } from "@/context/StepContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <StepContextProvider>
      <Component {...pageProps} />
    </StepContextProvider>
  );
}
