import { useState, useEffect, FunctionComponent } from 'react';
import { MockApi, WordObject, SentenceObject, GameData } from './Shared'
import GameField from './GameField';

const Game: FunctionComponent = () => {
    const [loaded, setLoaded] = useState<Boolean>(false);
    const [words, setWords] = useState<WordObject[]>([]);
    const [sentences, setSentences] = useState<SentenceObject[]>([]);

    useEffect(() => updateStateData(), []);

    const updateStateData = () => {
        MockApi.getData()
            .then(res => {
                setWords(res.words)
                setSentences(res.sentences)
                setLoaded(true)

            })
            .catch(err => console.log(err));
    }

    if (loaded) {
        return <GameField {...{ words, setWords, sentences, setSentences }} />
    }
    return <p> loading</p>
}

export default Game;