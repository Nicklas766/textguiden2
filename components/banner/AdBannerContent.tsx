import { useState, useEffect } from 'react';

type Props = {
    setVisible: (x: boolean) => void
}

const DESKTOP_AD = {
    link: 'https://track.adtraction.com/t/t?a=1088653514&as=1415950438&t=2&tk=1',
    image: 'https://track.adtraction.com/t/t?a=1088653514&as=1415950438&t=1&tk=1&i=1',
    width: '980',
    height: '120'
}

const MOBILE_AD = {
    link: 'https://track.adtraction.com/t/t?a=1088653485&as=1415950438&t=2&tk=1',
    image: 'https://track.adtraction.com/t/t?a=1088653485&as=1415950438&t=1&tk=1&i=1',
    width: '250',
    height: '240'
}

const AdBannerContent: React.FunctionComponent<Props> = ({ setVisible }) => {
    const COUNTMAX = 10;
    const [adDetails, setAdDetails] = useState(DESKTOP_AD);
    const [count, setCount] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);

        if ((window.innerWidth > 980) === false) {
            setAdDetails(MOBILE_AD);
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

        <a href={adDetails.link} target="_blank" >
            <img src={adDetails.image} width={adDetails.width} height={adDetails.height} />
        </a>

        <span>Reklam genom annonslänkar för Stayhard</span>
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