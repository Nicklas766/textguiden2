import { useState, useEffect } from 'react';

type Props = {
    setVisible: (x: boolean) => void
}

const AdBannerContent: React.FunctionComponent<Props> = ({ setVisible }) => {
    const COUNTMAX = 10;
    const [count, setCount] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);

        if ((window.innerWidth > 980) === false) {
            setVisible(false);
        }
    }, []);

    useEffect(() => {
        let timer = setTimeout(() => setCount(count + 1), 1000);

        if (count === COUNTMAX) {
            setVisible(false);
        }

        return () => clearTimeout(timer);
    }, [count]);


    if (hasMounted === false) {
        return null;
    }

    return <>

        <a href="https://track.adtraction.com/t/t?a=1082200808&as=1415950438&t=2&tk=1" target="_blank" >
            <img src="https://track.adtraction.com/t/t?a=1082200808&as=1415950438&t=1&tk=1&i=1" width="980" height="120" />
        </a>

        <span>Reklam genom annonslänkar för Vimla</span>
        <p>Erbjudandet försvinner inom <b>{COUNTMAX - count} sekund{(COUNTMAX - count) > 1 && 'er'}</b>.</p>

        <style jsx>{`
            a {
                margin-top: 5px;
            }

            p {
                font-family: 'Fredoka One',cursive;
                color: white;
                margin: 0;
            }

            b {
                color: orange;
            }

            span { 
                color: grey; 
                font-size: 0.5em; 
                width: 100%; 
                text-align: center; 
            }
      `}</style>
    </>
}

export default AdBannerContent;