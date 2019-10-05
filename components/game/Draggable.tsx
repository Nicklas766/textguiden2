import { useState, useEffect, FunctionComponent } from 'react';

// I assume it's not going to be more than 10 atm..
const calculateStartingPos = (index: number) => {
    if (index < 5) {
        return { left: index * 20 + '%', top: '0px' };
    }
    return { left: (index - 5) * 20 + '%', top: '50px' };
}

const Draggable: FunctionComponent<{ index: number, text: string }> = ({ index, text }) => {
    const [pos, setPos] = useState(calculateStartingPos(index));

    const style = {
        width: '50px',
        touchAction: 'none',
        height: '50px',
        background: 'white',
        borderRadius: '2em'
    };

    const handleTouchMove = (e: any) => {
        e.preventDefault();

        var touchLocation = e.targetTouches[0];

        const pageX = touchLocation.pageX;
        const pageY = touchLocation.pageY;

        let x = pageX - e.target.parentNode.offsetLeft;
        let y = pageY - e.target.parentNode.offsetTop;

        setPos({
            left: x - 25 + 'px',
            top: y - 25 + 'px'
        });
    }

    return <div data-index={index} style={{ ...style, ...pos, position: 'absolute' }} onTouchMove={(e) => handleTouchMove(e)}>
        {text}
    </div>
}

export default Draggable;