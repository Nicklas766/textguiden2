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

        <div className='hamburger' onClick={() => setShowNav(!showNav)}>
            <HamburgerMenu isClicked={showNav}/>
        </div>

        <Navbar visible={showNav}/>


        <style jsx>{`

            header {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                background: #15C39A;
            }

            .logo {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 25%;
            }

            .hamburger {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                width: 70%;
                margin-right: 5%;
            }
        `}</style>
 </header>
    )
}

export default Layout;