import { NextPage } from 'next';
import Layout from '../components/Layout';
import Game from '../components/game/Game';

import { useState } from 'react';

const GamePage: NextPage = () => {


    return <Layout title='TextGuiden - Spel' description='Vårt spel'>

        <h1>Utmana dig själv - BETA</h1>

        {/* <GameBoard/> */}

        <Game />


        <style jsx>{`
            h1 {
                text-align: center;
            }
            `}</style>
    </Layout>
};

export default GamePage;