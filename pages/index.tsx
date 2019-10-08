import { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';

import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SearchIcon from '@material-ui/icons/Search';
import ShortTextIcon from '@material-ui/icons/ShortText';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

type Props = {
    text: string,
    color: string,
    href: string
}

const FeaturedLink: React.FunctionComponent<Props> = ({ text, color, href, children }) => (
    <Link href={href}>
        <a>
            {children}
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

const iconStyle = {
    fontSize: '10em',
    margin: '5% auto'
}
const Home: NextPage = () => (
    <Layout title='TextGuiden - En svensk ordbok' description='Vi vill hjälpa dig att skriva fina texter. Detta gör vi genom att erbjuda dig en ordbok och ett spel som lär dig att bemästra det svenska språket.'>

        <FeaturedLink
            href='/spel'
            text='Utmana dig själv'
            color='#007888'>

            <SportsEsportsIcon style={iconStyle} />
        </FeaturedLink>
        <FeaturedLink
            href='/ord'
            text='Titta i vår ordbok'
            color='#245F73'>

            <SearchIcon style={iconStyle} />

        </FeaturedLink>

        <FeaturedLink
            href='/hur-forkortas'
            text='Förkortningar'
            color='#007888'>

            <ShortTextIcon style={iconStyle} />

        </FeaturedLink>


        <FeaturedLink
            href='/om-oss'
            text='Om oss'
            color='#245F73'>

            <EmojiPeopleIcon style={iconStyle} />

        </FeaturedLink>


        <style jsx>{`
                .MuiSvgIcon-root {
                    font-size: 12em;
                    margin: auto;
                }
        `}</style>
    </Layout>
);

export default Home;