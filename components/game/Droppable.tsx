import { forwardRef } from 'react';

const Droppable = forwardRef((props: { text: string, completed: boolean, pickedWord: string }, ref: any) => {
    const { text, completed, pickedWord } = props;
    
    const splittedText = text.replace('(?)', '-(?)-').split('-');

    return <div ref={ref} style={{ background: '#15C39A' }}>
        <p>{`${splittedText[0]} ${pickedWord} ${splittedText[2]}`}</p>
    </div>
})

export default Droppable;