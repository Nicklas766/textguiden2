import { NextPage } from 'next';
import Layout from '../components/Layout';

const About: NextPage = () => (
    <Layout title='TextGuiden - Om oss' description='En hemsida skapad av språkentusiaster och programmerare. Läs gärna mer om oss.'>
        <h1>Om oss</h1>

        <p>
            Vi vill hjälpa dig att skriva fina texter. Detta gör vi genom att ge dig information om hur ord kan stavas, användas eller förkortas.
            Vi som driver denna hemsida är språkentusiaster och programmerare. Tillsammans så har vi slagit ihop våra kunskaper och erbjuder en ordbok. 
            Mejladress för att kontakta oss kommer att dyka upp här inom kort.
        </p>

         <p>
             Vi skapar ett språkverktyg, under tiden så erbjuder vi en ordbok. Ordboken har vi byggt upp själva 
             genom att studera det svenska språket. Alla namn som finns i ordboken är dock inhämtade från en källa som inte får anges eftersom datan har bearbetats.
             Ordboken uppdateras ständigt och därav kan enstaka fel förekomma.
        </p>

        <style jsx>{`
            h1 {
                font-family: 'Montserrat',sans-serif;
                text-align: center;
                color: white;
            }

            p {
                font-family: 'Open Sans', sans-serif;
                color: white;
                font-weight: 300;
                letter-spacing: 1.4px;
                line-height: 1.78em;
                text-align: left;
                padding: 20px 20px 0% 20px;
            }
    `}</style>
    </Layout>
);

export default About;