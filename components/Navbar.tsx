import Link from 'next/link';

type Props = {
    visible: boolean
}

const Navbar: React.FunctionComponent<Props> = ({ visible }) => { 
    return (
        <nav className={visible ? 'show' : 'hide'}>

            <Link href='/'>  
                <a>Hem</a>
            </Link>
   
            <Link href='/om-oss'>  
                <a>Om oss</a>
            </Link>

            <style jsx>{`
                nav {
                    width: 100%;
                    transition: 0.2s;
                    background: #15C39A;
                    text-align: center;
                }

                .hide {
                    height 0px;
                }

                .show {
                    height 80px;
                }

                nav a {
                    width: 100%;
                    text-decoration: none;
                    font-weight: 700;
                    color: white;
                    height: 40px;
                    display: block;
                }
            `}</style>
        </nav>
    );
}

export default Navbar;