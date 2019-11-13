import { useState, useEffect } from 'react'

type Props = {
  timer: number,
  CloseBannerProp?: (setVisible: (x: boolean) => void) => void
}

const TimedBanner: React.FunctionComponent<Props> = ({ timer, children, CloseBannerProp }) => {
  const [visible, setVisible] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => setVisible(true), timer);
  }, []);

  if (visible) {
    return (
      <div>
        {children}

        {CloseBannerProp && CloseBannerProp(setVisible)}

        <style jsx>{`
            div {
                display: flex;
                flex-wrap: wrap;
                background: #5e515a;
                justify-content: center;
                align-items: center;
            }
        `}</style>
      </div>
    );
  }

  return null;
}

export default TimedBanner;