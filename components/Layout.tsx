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


    <style jsx>{`
        .site-wrapper {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
        }

        .content-wrapper {
            width: 100%;
            background: white;
            border-top-left-radius: 1em;
            border-top-right-radius: 1em;
            min-height: 1000px;
        }

        @media (min-width: 1000px) {
            .content-wrapper {
                width: 50%;
                margin: auto;
            }
        }
    `}</style>

    <style jsx global>{`
        @media (max-width: 1000px) {
            header a h1 {
                display: none;
            }
        }
            
        html, body {
            padding: 0;
            margin: 0;
            background: #15C39A;
        }

        h1, h2, h3 {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
        }

        li {
            font-family: 'Open Sans', sans-serif;
            margin-top: 5px;
            font-weight: 300;
            letter-spacing: 1.1px;
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