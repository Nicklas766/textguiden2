import { forwardRef } from 'react';

const Droppable = forwardRef((props: { text: string }, ref: any) => {
    const { text } = props;

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
                border-radius: 2em;
                margin-top: 350px;
                font-size: 2em;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
            }

            .empty {
                height: 50px;
                background: white;
                color: #2F4858;
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