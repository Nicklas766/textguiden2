import Head from 'next/head';
import Header from './Header'

type Props = {
  title: string,
  description: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title, description }) => (
  <div className='site-wrapper'>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description}/>
      <meta charSet="UTF-8" />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
    </Head>

    <Header/>

    <div className='content-wrapper'>
        {children}
    </div>

    <footer>
        footer here
    </footer>
    
    <style jsx>{`
        .site-wrapper {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
        }

        .content-wrapper {
            width: 100%;
        }
    `}</style>

    <style jsx global>{`
        html, body {
            padding: 0;
            margin: 0;
        }

        h1, h2, h3 {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
        }

        p {
            font-family: 'Open Sans', sans-serif;
            font-weight: 300;
            letter-spacing: 1.4px;
            line-height: 1.78em;
        }

        a {
            font-family: 'Montserrat', sans-serif;
        }
      `}</style>
  </div>
)

export default Layout;