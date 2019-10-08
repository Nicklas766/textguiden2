import { NextPage } from 'next';
import Layout from '../components/Layout';
import Game from '../components/game/Game';
import AcceptTerms from '../components/game/AcceptTerms';


const GamePage: NextPage = () => {

    return <Layout title='TextGuiden - Spel' description='Vårt spel'>

        <h1>Öva på svenska</h1>
        <AcceptTerms/>

        <Game />

        <style jsx>{`
            h1 {
                text-align: center;
            }
            `}</style>
    </Layout>
};

export default GamePage;