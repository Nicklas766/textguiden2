import { useState, useRef, createRef, useEffect, FunctionComponent } from 'react';
import { WordObject, SentenceObject, GameData } from './Shared'
import Draggable from './Draggable'
import Droppable from './Droppable'
import CompletedGame from './CompletedGame'

const isCollided = (wElement: HTMLElement, sElement: HTMLElement | null) => {

    const wordElement = wElement.getBoundingClientRect();
    const sentenceElement = sElement!.getBoundingClientRect();

    if (wordElement.left < sentenceElement.left + sentenceElement.width &&
        wordElement.left + wordElement.width > sentenceElement.left &&
        wordElement.top < sentenceElement.top + sentenceElement.height &&
        wordElement.height + wordElement.top > sentenceElement.top) {

        return true;
    }
}

/**
 * Keeps track of collisions of draggables and droppables and updates state accordingly
 */
const GameField: FunctionComponent<any> = ({ words, setWords, sentences, setSentences }) => {
    const refs = useRef(null);

    const handleTouchEnd = (event: any) => {
        if (event.target.hasAttribute('data-index')) {
            const wordIndex: number = Number(event.target.getAttribute('data-index'));

            if (isCollided(event.target, refs.current) && words[wordIndex].tags.includes(sentences[0].tag)) {
                setWords([
                    ...words.slice(0, wordIndex),
                    ...words.slice(wordIndex + 1)
                ])

                setSentences(sentences.slice(1))
            }
        }
    }

    return <div className='touchField' onTouchEnd={(event) => handleTouchEnd(event)} onMouseUp={(e) => handleTouchEnd(e)}>

        {words.map((w: WordObject, i: number) => <Draggable key={w.id} index={i} text={w.word} />)}

        {sentences.length > 0 ? <Droppable ref={refs} text={sentences[0].text} />: <CompletedGame/>}

        <style jsx>{`
            .touchField {
                position: relative;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                user-select: none;
            }`}</style>
    </div>;
}

export default GameField;