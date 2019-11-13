import Head from 'next/head';
import Header from './header/Header'

type Props = {
    title: string,
    description: string,
    shouldBeIndexed?: boolean
}

const Layout: React.FunctionComponent<Props> = ({ children, title, description, shouldBeIndexed = true }) => (
    <div className='site-wrapper'>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta charSet="UTF-8" />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />
            {!shouldBeIndexed && <meta name="robots" content="noindex" />}
            <link rel="preload" as="font" type="font/woff2" href="/static/fonts/open-sans-v17-latin-regular.woff2" crossOrigin={'true'} />
            <link rel="preload" as="font" type="font/woff2" href="/static/fonts/fredoka-one-v7-latin-regular.woff2" crossOrigin={'true'} />
        </Head>

        <Header />
        <div className='content-wrapper'>
            {children}
        </div>

        <style jsx>{`
        /* fredoka-one-regular - latin */
        @font-face {
        font-family: 'Fredoka One';
        font-display: swap;
        font-style: normal;
        font-weight: 400;
        src: url('../static/fonts/fredoka-one-v7-latin-regular.eot'); /* IE9 Compat Modes */
        src: local('Fredoka One'), local('FredokaOne-Regular'),
            url('../static/fonts/fredoka-one-v7-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('../static/fonts/fredoka-one-v7-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
            url('../static/fonts/fredoka-one-v7-latin-regular.woff') format('woff'), /* Modern Browsers */
            url('../static/fonts/fredoka-one-v7-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
            url('../static/fonts/fredoka-one-v7-latin-regular.svg#FredokaOne') format('svg'); /* Legacy iOS */
        }

        /* open-sans-regular - latin */
        @font-face {
          font-family: 'Open Sans';
          font-display: swap;
          font-style: normal;
          font-weight: 400;
          src: url('../static/fonts/open-sans-v17-latin-regular.eot'); /* IE9 Compat Modes */
          src: local('Open Sans Regular'), local('OpenSans-Regular'),
               url('../static/fonts/open-sans-v17-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
               url('../static/fonts/open-sans-v17-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
               url('../static/fonts/open-sans-v17-latin-regular.woff') format('woff'), /* Modern Browsers */
               url('../static/fonts/open-sans-v17-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
               url('../static/fonts/open-sans-v17-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
        }

        .site-wrapper {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
        }

        .content-wrapper {
            width: 100%;
            background: white;
            min-height: 1000px;
        }

        @media (min-width: 1000px) {
            .content-wrapper {
                width: 50%;
                margin: auto;
                border-top-left-radius: 1em;
                border-top-right-radius: 1em;
            }
        }
    `}</style>
        <style jsx global>{`

        .touchField {
            font-size: 1em;
        }

        @media (max-width: 1000px) {
            header a h1 {
                display: none;
            }
            .touchField {
                font-size: 0.8em;
            }
        }
            
        html, body {
            padding: 0;
            margin: 0;
            background: #15C39A;
        }
        b {
            color: #e2534f;
        }
        h1, h2, h3 {
            font-family: 'Fredoka One', cursive;
            letter-spacing: 1.5px;
            font-weight: 400;
        }

        div, button, a, span {
            font-family: 'Open Sans', sans-serif;
        }

        li {
            font-family: 'Open Sans', sans-serif;
            margin-top: 5px;
            letter-spacing: 1.1px;
        }

        p {
            font-family: 'Open Sans', sans-serif;
            letter-spacing: 1.4px;
            line-height: 1.78em;
        }
      `}</style>
    </div>
)

export default Layout;