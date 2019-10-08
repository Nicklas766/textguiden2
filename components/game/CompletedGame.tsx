import { FunctionComponent, useState } from 'react';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const CompletedGame: FunctionComponent = () => {
    const [text, setText] = useState('Vad tyckte du?');

    return <div>
        <h1>Du klarade spelet!</h1>
        <p>Vi jobbar på att förbättra semantiken och lägga in andra ordklasser.</p>

        <figure>
            <img alt='gif' src='/static/happy.webp' />
            <figcaption><a href='https://giphy.com' rel='noopener noreferrer' target='_blank'>Bildkälla</a></figcaption>
        </figure>
        <p>{text}</p>

        <ButtonGroup fullWidth aria-label='full width outlined button group'>
            <Button onClick={() => setText('Ok bra')}>Bra</Button>
            <Button onClick={() => setText('Ok vi ska fixa detta')}>Behöver förbättras</Button>
            <Button onClick={() => setText('Ok tack för att du är ärlig')}>Inte bra</Button>
        </ButtonGroup>

        <style jsx>{`
            img {
                display: block;
                width: 100%;
            }
            `}</style>
    </div>
}

export default CompletedGame;