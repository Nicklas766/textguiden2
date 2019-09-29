import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import Navbar from './Navbar';
import { useState } from 'react';


const Layout: React.FunctionComponent = () => {
    const [showNav, setShowNav] = useState(false)

    return (
    <header>
        <Link href='/'>  
            <a className='logo'><img src='/static/favicon.png'/></a>
        </Link>

        <div onClick={() => setShowNav(!showNav)}>
            <HamburgerMenu isClicked={showNav}/>
        </div>

        <Navbar visible={showNav}/>


        <style jsx>{`

            header {
                display: flex;
                flex-wrap: wrap;
                width: 100%;

                text-align: center;
                background: #15C39A;
            }

            .logo {
                margin: auto;
                color: white;
                width: 100%;
                text-decoration: none;
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                font-size: 2em;
            }
        `}</style>
 </header>
    )
}

export default Layout;