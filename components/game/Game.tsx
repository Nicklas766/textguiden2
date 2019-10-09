import { useState, useEffect, FunctionComponent } from 'react';
import { WordObject, SentenceObject, GameData } from './Shared'
import GameField from './GameField';
import API from '../../utils/API';
import Button from '@material-ui/core/Button';

// O(n) shuffle algorithm "Fisher–Yates shuffle"
function shuffleArray(array: []) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const Game: FunctionComponent = () => {
    const [loaded, setLoaded] = useState<Boolean>(false);
    const [words, setWords] = useState<WordObject[]>([]);
    const [sentences, setSentences] = useState<SentenceObject[]>([]);

    useEffect(() => updateStateData(), []);

    const updateStateData = () => {
        API.getData('/game')
            .then(res => {
                setWords(shuffleArray(res.data.words));
                setSentences(res.data.sentences);
                setLoaded(true);

            })
            .catch(err => console.log(err));
    }

    if (loaded) {
        return <div>
            <Button
                onClick={() => updateStateData()}
                color="default"
                variant='outlined'
                style={{ color: 'white', background: '#15C39A', margin: '0 25% 5% 25%', width: '50%' }}
            >
                Nytt spel
            </Button>

            <GameField {...{ words, setWords, sentences, setSentences }} />
        </div>
    }
    return <p>Laddar spelet...</p>
}

export default Game;