import { useState, useEffect, FunctionComponent } from 'react';
import { WordObject, SentenceObject, GameData } from './Shared'
import GameField from './GameField';
import API from '../../utils/API';


const Game: FunctionComponent = () => {
    const [loaded, setLoaded] = useState<Boolean>(false);
    const [words, setWords] = useState<WordObject[]>([]);
    const [sentences, setSentences] = useState<SentenceObject[]>([]);

    useEffect(() => updateStateData(), []);

    const updateStateData = () => {
        API.getData('/game')
        .then(res => {
            setWords(res.data.words)
            setSentences(res.data.sentences)
            setLoaded(true)

        })
        .catch(err => console.log(err));
    }

    if (loaded) {
        return <div>
            <button onClick={() => updateStateData()}>nytt spel</button>
            <GameField {...{ words, setWords, sentences, setSentences }} />
            </div>
    }
    return <p> loading</p>
}

export default Game;