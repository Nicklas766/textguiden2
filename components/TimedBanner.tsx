import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

type Props = {
  timer: number,
  buttonText: string,
  link?: string
}

const TimedBanner: React.FunctionComponent<Props> = ({ timer, buttonText, link, children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), timer)
  }, []);

  const mainButton = (
    <Button
      onClick={() => setVisible(false)}
      style={{ color: 'white', background: '#15C39A' }}
      variant="outlined"
      color="default">

      {buttonText}
    </Button>);

  if (visible) {
    return (
      <div>
        {children}

        <span style={{ marginLeft: '0.3%' }}>
          {link && <Link href={link}><a>{mainButton}</a></Link>}
          {!link && mainButton}
        </span>

        <Button
          onClick={() => setVisible(false)}
          style={{ color: 'white', background: '#DC7D4C', marginLeft: '0.3%' }}
          variant="outlined"
          color="default">

          <CloseOutlinedIcon />
        </Button>

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