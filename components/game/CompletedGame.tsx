import { FunctionComponent, useState } from 'react';
import TextWrapper from '../TextWrapper';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const CompletedGame: FunctionComponent = () => {
    const [text, setText] = useState('Vad tyckte du?');

    return <TextWrapper>
        <h1>Du klarade spelet!</h1>
        <p>Vi jobbar på att förbättra semantiken och lägga in andra ordklasser. Vi vet även att vissa ord är korrekta för vissa meningar men att det ej accepteras som rätt svar.</p>

        <figure>
            <img alt='gif' src='/static/happy.webp' />
        </figure>
        <p>{text}</p>

        <ButtonGroup fullWidth aria-label='full width outlined button group'>
            <Button onClick={() => setText('Kul att höra! Om du tyckte den var bra så får du gärna dela hemsidan med en vän.')}>Bra</Button>
            <Button onClick={() => setText('Vi håller med och jobbar på det. Har du några tips? Mejla gärna oss på textguiden@outlook.com.')}>Behöver förbättras</Button>
            <Button onClick={() => setText('Tråkigt att höra, men tack för att du är ärlig.')}>Inte bra</Button>
        </ButtonGroup>

        <style jsx>{`
            img {
                display: block;
                width: 100%;
            }
            `}</style>
    </TextWrapper>
}

export default CompletedGame;