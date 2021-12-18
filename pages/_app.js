/* eslint-disable */
import { useEffect } from "react";
import App from "next/app"
import AOS from "aos";
import SiteLayout from "../components/SiteLayout";

import "aos/dist/aos.css";
import "../styles/style.scss";

const MyApp = ({ Component, pageProps }) => {

  const getLayout =
      Component.getLayout || ((page) => <SiteLayout children={page} />);

    useEffect(() => {
      AOS.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50
      });
    }, []);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp
