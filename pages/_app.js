import React from "react";
import App from "next/app";
import "../styles/globals.css";
import "../styles/custom.css";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-WJTCXB3",
};

class MyApp extends App {
  componentDidMount() {
    TagManager.initialize(tagManagerArgs);
  }

  render() {
    const { Component, pageProps } = this.props;

    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(<Component {...pageProps}></Component>);
  }
}

export default MyApp;
