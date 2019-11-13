import Button from '@material-ui/core/Button';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from 'next/link';

type Props = {
    setVisible: (x: boolean) => void
}

const AcceptTimedBanner: React.FunctionComponent<Props> = ({ setVisible }) => (
    <div>
        <p>TextGuiden använder cookies för att förbättra din upplevelse, <Link href='/datahantering'><a>läs mer här</a></Link>.</p>

        <ButtonGroup
            variant="text"
            color="default"
            size="large"
            aria-label="large contained secondary button group">
            <Button
                onClick={() => setVisible(false)}
                aria-label="agreement button"
                style={{ color: 'white', background: '#15C39A', marginLeft: '5px' }}>Jag förstår</Button>

            <Button
                onClick={() => setVisible(false)}
                aria-label="close button"
                style={{ color: 'white', background: '#DC7D4C' }}
            >
                <CloseOutlinedIcon />
            </Button>

        </ButtonGroup>

        <style jsx>{`
            div {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                padding: 4px;
            }

            p { color: white; }
            a { color: yellow; }
        `}</style>

    </div>
)

export default AcceptTimedBanner;