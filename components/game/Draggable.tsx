import { useState, FunctionComponent } from 'react';

// I assume it's not going to be more than 12 atm..
const calculateStartingStyle = (index: number) => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
        touchAction: 'none',
        height: '50px',
        background: '#2F4858',
        color: 'white',
        borderRadius: '2em',
        zIndex: 0,
        boxShadow: '',
        transition: '0.5s'
    };

    const rowPlacement = (index % 3);
    const topMargin = index < 3 ? 0 : index < 6 ? 100 : index < 9 ? 200 : 300;

    return { ...style, left: rowPlacement * 33 + '%', top: topMargin + 'px' };
}

const Draggable: FunctionComponent<{ index: number, text: string }> = ({ index, text }) => {

    const [style, setStyle] = useState(calculateStartingStyle(index))
    const [clicked, setClicked] = useState(false);

    const handleMove = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        if (clicked) {
            let left, top;

            if (e.type === 'touchmove') {
                let touchLocation = e.targetTouches[0];
                left = (touchLocation.pageX - e.target.parentNode.offsetLeft) - 50 + 'px';
                top = (touchLocation.pageY - e.target.parentNode.offsetTop) - 25 + 'px';
            }
            else {
                left = (e.pageX - e.target.parentNode.offsetLeft) - 70 + 'px';
                top = (e.pageY - e.target.parentNode.offsetTop) - 25 + 'px';
            }
            setStyle({ ...style, left, top });
        }
    }

    const handleActive = () => {
        setStyle({ ...style, zIndex: 100, background: '#007888', boxShadow: 'black 1px 1px 5px 1px', transition: '0s' })
        setClicked(true)
    }

    const handleUp = (e: any) => {
        if (clicked) {
            setClicked(false);
            setStyle(calculateStartingStyle(index))
        }
    }

    return <div
        data-index={index}
        style={{ ...style, position: 'absolute' }}

        onTouchStart={(e) => handleActive()}
        onMouseDown={(e) => handleActive()}

        onTouchMove={(e) => handleMove(e)}
        onMouseMove={(e) => handleMove(e)}

        onMouseLeave={(e) => handleUp(e)}
        onMouseUp={(e) => handleUp(e)}
        onTouchEnd={(e) => handleUp(e)}>

        {text}
    </div>
}

export default Draggable;