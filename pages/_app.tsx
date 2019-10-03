import App from 'next/app'
import TimedBanner from '../components/TimedBanner';

import Link from 'next/link';


class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props
    return <div>

      <TimedBanner buttonText='Jag förstår' timer={0}>
        <p>TextGuiden använder cookies för att förbättra din upplevelse, <Link href='/datahantering'><a>läs mer här.</a></Link></p>
      </TimedBanner>

      <TimedBanner buttonText='Jag antar utmaningen' link='/ord' timer={1000}>
        <p>Du är utmanad!</p>
      </TimedBanner>

      <Component {...pageProps} />

                  <style jsx>{`
                div {
                    display: flex;
                    flex-wrap: wrap;
                }
                p {
                  color: white;
                }

                a {
                  color: yellow;
                }

                `}</style>
    </div>
  }
}

export default MyApp
