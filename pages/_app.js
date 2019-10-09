import App from 'next/app'
import TimedBanner from '../components/TimedBanner';
import Router from "next/router";
import withGA from "next-ga";
import Link from 'next/link';

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props
    return <>

      <TimedBanner timer={3000}>
        <p>TextGuiden använder cookies för att förbättra din upplevelse, <Link href='/datahantering'><a>läs mer här</a></Link>.</p>
        <style jsx>{`
              p { color: white; }
              a { color: yellow; }
      `}</style>
      </TimedBanner>

      <Component {...pageProps} />
    </>
  }
}

export default withGA(process.env.GA, Router)(MyApp);
