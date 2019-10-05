import { NextPage } from 'next';
import Layout from '../components/Layout';
import TextWrapper from '../components/TextWrapper';

const Policy: NextPage = () => (
    <Layout title='TextGuiden - Datahantering' description='Här hittar du information om vår datahantering på TextGuiden'>
        <TextWrapper>
            <h1>Hur vi på TextGuiden hanterar data</h1>

            <p>
                Här på TextGuiden.se så har vi ingen personlig databas som innehåller information om dig. Däremot så använder vi tredjepartsverktyg och vi vill
                att våra användare ska förstå deras rättigheter, därav så har vi skapat en lista nedan:
            </p>

            <h3>1. Google Analytics</h3>
            <p>
                Vi använder cookies med hjälp av analysverktyget Google Analytics, detta hjälper oss att förstå hur våra användare använder hemsidan.
                Verktyget ger oss information om hur våra användare hittade till hemsidan, vilka sidor på Textguiden användare besökt, hur lång tid de besökte hemsidan. Detta betyder
                även att information om hur våra användare använder hemsidan skickas till en tredjepart, Google Analytics.

                För mer information om hur du skyddar din data, så går det att läsa mer <a href={"https://support.google.com/analytics/answer/6004245?hl=sv&utm_id=ad"} rel="noopener noreferrer">här</a>.
            </p>

            <h3>2. Kontakt</h3>
            <p>Vid frågor om detta så går det att nå oss via: textguiden@hotmail.com.</p>

            <style jsx>{`
                h1 {
                    border-bottom: 1px solid silver;
                    text-align: center;
                }
            `}</style>
        </TextWrapper>
    </Layout>
);

export default Policy;

