import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';

const Layout: React.FunctionComponent = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <header>
            <Link href='/'>
                <a className='centered-content logo'>
                    <h1>TextGuiden.se</h1>
                </a>
            </Link>

            <div className='centered-content hamburger'>

                <Link href='/spel'>
                    <a className='centered-content'>Spela</a>
                </Link>

                <div onClick={() => setShowNav(!showNav)}>
                    <HamburgerMenu isClicked={showNav} />
                </div>
            </div>

            <Navbar visible={showNav} />

            <style jsx>{`
            header {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                background: #15C39A;
            }

            a {
                text-decoration: none;
                color: white;
            }

            .centered-content {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .logo {
                width: 25%;
            }

            .hamburger a {
                height: 40px;
                margin: 4px 0;
                width: 100px;
                background: #007888;
                color: white;
                border-radius: 2em;
                margin-right: 10%;
            }

            .hamburger {
                width: 65%;
                justify-content: flex-end;
            }
        `}</style>
        </header>
    )
}

export default Layout;