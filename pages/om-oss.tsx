import { NextPage } from 'next';
import Layout from '../components/Layout';
import TextWrapper from '../components/TextWrapper';

const About: NextPage = () => (
    <Layout title='TextGuiden - Om oss' description='En hemsida skapad av språkentusiaster och programmerare. Läs gärna mer om oss.'>
        <TextWrapper>

            <h1>Om oss</h1>

            <p>
                Vårt mål med denna hemsida är att göra det lättare att öva på svenska. Vi har skapat ett spel med hjälp av språkteknologi.
                Man kan använda för att antingen öva på svenska eller för att utmana sig själv. Om man fastnar så kan du söka efter orden för att få mer information om dem.
            </p>

            <p>
                Datan till språkverktyget har vi byggt upp själva genom att studera det svenska språket. Alla namn som finns på hemsidan är dock
                inhämtade från en källa som inte får anges eftersom datan har bearbetats. Datan uppdateras ständigt och därav kan enstaka fel förekomma.
            </p>

            <style jsx>{`
                img {
                    margin: auto;
                    display: block;
                }
                h1 {
                    border-bottom: 1px solid silver;
                    text-align: center;
                }
            `}</style>
        </TextWrapper>
    </Layout>
);

export default About;