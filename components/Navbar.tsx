import Link from 'next/link';

type Props = {
    visible: boolean
}

const Navbar: React.FunctionComponent<Props> = ({ visible }) => { 
    if (visible) {
        return (
            <nav>
                <Link href='/om-oss'>  
                    <a>om oss</a>
                </Link>
                <Link href='/'>  
                    <a>TextGuiden</a>
                </Link>

                <style jsx>{`
                    nav {
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                    }

                    nav a {
                        display: block;
                        width: 50%;
                    }
                `}</style>
            </nav>
        );
    }
    return null;
}

export default Navbar;