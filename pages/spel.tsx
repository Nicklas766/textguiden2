import { NextPage } from 'next';
import Layout from '../components/Layout';
import Game from '../components/game/Game';
import AcceptTerms from '../components/game/AcceptTerms';
import TextWrapper from '../components/TextWrapper';

const GamePage: NextPage = () => {

    return <Layout title='Öva på svenska spel' description='Öva på svenska med vårt spel. Man drar ord till rätt mening, detta är ett bra sätt att öva på svenska.'>
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