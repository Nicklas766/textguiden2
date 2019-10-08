import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import ButtonGroup from '@material-ui/core/ButtonGroup';

type Props = {
  timer: number,
}

const TimedBanner: React.FunctionComponent<Props> = ({ timer, children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), timer)
  }, []);

  if (visible) {
    return (
      <div>
        {children}
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
                background: #5e515a;
                justify-content: center;
                align-items: center;
                padding: 7px;
            }
            `}</style>
      </div>
    );
  }

  return null;
}

export default TimedBanner;