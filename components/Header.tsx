import Link from 'next/link';

const Layout: React.FunctionComponent = () => (
    <header>
        <Link href={'/'}>  
            <a>TextGuiden</a>
        </Link>

        <style jsx>{`
            header {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                height: 100px;
                text-align: center;
                background: white;
            }

            a {
                margin: auto;
                color: #15C39A;
                text-decoration: none;
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                font-size: 2em;
            }
        `}</style>
 </header>
)

export default Layout;