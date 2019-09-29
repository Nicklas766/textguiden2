import { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';

type Props = {
    imgSrc: string,
    text: string,
    color: string,
    href: string
}

const FeaturedLink: React.FunctionComponent<Props> = ({ imgSrc, text, color, href }) => (
    <Link href={href}>
        <a>
            <img src={imgSrc} />
            <h2>{text}</h2>

            <style jsx>{`
                a {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    text-decoration: none;
                    color: white;
                    background: ${color};    
                }

                h2 {
                    width: 100%;
                    text-align: center;
                }

                img { 
                    width: 25%;
                    margin: 5% auto 0% auto;
                }
        `}</style>
    </a>
</Link>
)


const Home: NextPage = () => (
    <Layout title='TextGuiden' description='En svensk ordbok'> 

        <FeaturedLink 
                      href='/spel' 
                      imgSrc='/static/gamepad.png' 
                      text='Utmana dig själv' 
                      color='#00a5b6' />

        <FeaturedLink 
                      href='' 
                      imgSrc='/static/open-book.png' 
                      text='Titta i vår ordbok' 
                      color='#43cfa8' />

        <FeaturedLink 
                      href='' 
                      imgSrc='/static/loupe.png' 
                      text='Förkortningar' 
                      color='#00bbb4' />


        <FeaturedLink 
                     href='/om-oss' 
                     imgSrc='/static/about-us.png' 
                     text='Om oss' 
                     color='#43cfa8' />

    </Layout>
);

export default Home;