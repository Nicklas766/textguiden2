import { useState, FunctionComponent } from 'react';

// I assume it's not going to be more than 10 atm..
const calculateStartingStyle = (index: number) => {
    const style = {
        width: '100px',
        touchAction: 'none',
        height: '75px',
        background: 'white',
        borderRadius: '2em',
        zIndex: 0
    };

    if (index < 5) {
        return { ...style, left: index * 20 + '%', top: '0px' };
    }
    return { ...style, left: (index - 5) * 20 + '%', top: '50px' };
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
                top = (touchLocation.pageY - e.target.parentNode.offsetTop) - 35 + 'px';
            }
            else {
                left = (e.pageX - e.target.parentNode.offsetLeft) - 50 + 'px';
                top = (e.pageY - e.target.parentNode.offsetTop) - 35 + 'px';
            }
            setStyle({ ...style, left, top });
        }
    }

    const handleActive = () => {
        setStyle({ ...style, zIndex: 100, background: 'blue' })
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