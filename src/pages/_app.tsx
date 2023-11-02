import "@/styles/globals.css";
import type { CustomAppPage } from "next/app";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default App;
