import { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';
import TextWrapper from '../components/TextWrapper';

const About: NextPage = () => (
    <Layout title='TextGuiden - Om oss' description='En hemsida skapad av språkentusiaster och programmerare. Läs gärna mer om oss.'>
        <TextWrapper>
            <h1>Om oss</h1>

            <p>
                Vårt mål med denna hemsida är att hjälpa dig att skriva fina texter. Detta gör vi genom att ge dig information om hur ord kan stavas, användas eller förkortas. 
                Vi har även skapat ett spel med hjälp av språkteknologi. Spelet spelar man för att antingen öva på svenska eller för att utmana sig själv. 
                Vi som driver denna hemsida är språkentusiaster och programmerare. Tillsammans så har vi slagit ihop våra kunskaper och erbjuder en ordbok och ett spel

            </p>

            <p>
                Datan till språkverktyget har vi byggt upp själva genom att studera det svenska språket. Alla namn som finns på hemsidan är dock
                inhämtade från en källa som inte får anges eftersom datan har bearbetats. Datan uppdateras ständigt och därav kan enstaka fel förekomma.
            </p>


            <p><Link href='/datahantering'><a>Klicka här för att läsa om vår datahantering</a></Link>.</p>

            <style jsx>{`
                h1 {
                    border-bottom: 1px solid silver;
                    text-align: center;
                }
            `}</style>
        </TextWrapper>
    </Layout>
);

export default About;