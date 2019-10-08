import { FunctionComponent, useState } from 'react';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const CompletedGame: FunctionComponent = () => {
    const [text, setText] = useState('Vad tyckte du?');

    const [imgLink, setImgLink] = useState('/static/happy.webp');

    return <div>
        <h1>Du klarade spelet!</h1>
        <p>Vi jobbar på att förbättra semantiken och lägga in andra ordklasser.</p>

        <figure>
            <img alt='gif' src={imgLink} />
            <figcaption><a href='https://giphy.com' rel='noopener noreferrer' target='_blank'>Bildkälla</a></figcaption>
        </figure>
        <p>{text}</p>

        <ButtonGroup fullWidth aria-label='full width outlined button group'>
            <Button onClick={() => setImgLink('http://giphygifs.s3.amazonaws.com/media/tlGD7PDy1w8fK/giphy.gif')}>Bra</Button>
            <Button onClick={() => setImgLink('https://media3.giphy.com/media/DfSXiR60W9MVq/giphy.gif?cid=790b76115e439f139f0246cc972d04e66597006cdefc9269&rid=giphy.gif')}>Behöver förbättras</Button>
            <Button onClick={() => setImgLink('/static/bad.gif')}>Inte bra</Button>
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