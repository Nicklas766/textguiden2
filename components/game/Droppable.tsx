import { forwardRef } from 'react';

const Droppable = forwardRef(({ text }: { text: string }, ref: any) => {

    const splittedText = text.replace('(?)', '-(?)-').split('-');

    return <div ref={ref}>

        <span>{splittedText[0]}</span>
        <span className='empty'>(?)</span>
        <span>{splittedText[2]}</span>

        <style jsx>{`
            div {
                background: #00AA9C;
                height: 100px;
                width: 100%;
                margin-top: 360px;
                border-radius: 2em;
                font-size: 1.5em;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
            }

            .empty {
                height: 50px;
                background: white;
                border-radius: 2em;
            }

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 33%;
            }
            
            
            `}</style>
    </div>
})

export default Droppable;