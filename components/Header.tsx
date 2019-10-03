import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

const Layout: React.FunctionComponent = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <header>
        <Link href='/'>  
            <a className='centered-content logo'>
                <img src='/static/favicon.png'/>
                <h1>extGuiden</h1>
            </a>
        </Link>

        <div className='centered-content displayed-links'>
            <Link href='/om-oss'>  
                <a className='centered-content'>Spela<VideogameAssetIcon/></a>
            </Link> 
        </div>

        <div className='centered-content hamburger' onClick={() => setShowNav(!showNav)}>
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

            .displayed-links {
                justify-content: flex-end;
                width: 60%;
            }

            .displayed-links a {
                height: 40px;
                margin: 4px 0;
                width: 100px;
                background: #00a5b6;
                color: white;
                border-radius: 2em;
            }

            .hamburger {
                width: 15%;
            }
        `}</style>
    </header>
    )
}

export default Layout;