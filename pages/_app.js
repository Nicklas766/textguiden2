import App from 'next/app'
import TimedBanner from '../components/banner/TimedBanner';
import AcceptTimedBanner from '../components/banner/AcceptTimedBanner';
import AdBannerContent from '../components/banner/AdBannerContent';
import Router from "next/router";
import Link from 'next/link';

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return <>
      <TimedBanner timer={3000} CloseBannerProp={(setVisible) => <AcceptTimedBanner setVisible={setVisible} />} />
      <TimedBanner timer={5000} CloseBannerProp={(setVisible) => <AdBannerContent setVisible={setVisible} />} />

      <Component {...pageProps} />
    </>
  }
}

export default MyApp;