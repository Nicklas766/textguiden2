import { NextPage } from 'next';
import Layout from '../components/Layout';
import Game from '../components/game/Game';

import { useState } from 'react';

const GamePage: NextPage = () => {


    return <Layout title='TextGuiden - Spel' description='Vårt spel'>

        <h1>Utmana dig själv - BETA</h1>

        {/* <GameBoard/> */}

        <p>Hur spelar man? Dra den till meningen, om du använder en stationär dator så behöver du dra sakta annars behöver du börja om</p>

        <p>Just nu så går det endast att öva på substantiv.</p>

        <Game />


        <style jsx>{`
            h1 {
                text-align: center;
            }
            `}</style>
    </Layout>
};

export default GamePage;