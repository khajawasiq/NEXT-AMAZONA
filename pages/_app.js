import "../styles/globals.css";
import { useEffect } from "react";
import {storeProvider} from "../Utils/Store";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <storeProvider>
      <Component {...pageProps} />
    </storeProvider>
  );
}

export default MyApp;
