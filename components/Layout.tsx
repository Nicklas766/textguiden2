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
            background-image: linear-gradient(to top, #00bfa5, #00b7a3, #00b0a0, #00a89d, #00a19a);
            background-size: cover;
        }
      `}</style>
  </div>
)

export default Layout;