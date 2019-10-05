import { useState, useRef, createRef, useEffect, FunctionComponent } from 'react';
import { MockApi, WordObject, SentenceObject, GameData } from './Shared'
import Draggable from './Draggable'
import Droppable from './Droppable'

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
    const refs = useRef<React.RefObject<HTMLInputElement>[]>(sentences.map((x: any) => createRef()))

    const handleTouchEnd = (event: any) => {
        if (event.target.hasAttribute('data-index')) {
            const wordIndex: number = Number(event.target.getAttribute('data-index'));
            const wordObj: WordObject = words[wordIndex];

            const collidedSentence = sentences.find((s: SentenceObject, i: number) => isCollided(event.target, refs.current[i].current) && wordObj.tags.includes(s.tag) && !s.completed);
            const indexOfCollidedSentence = sentences.indexOf(collidedSentence);

            if (indexOfCollidedSentence > -1) {
                setWords([
                    ...words.slice(0, wordIndex),
                    ...words.slice(wordIndex + 1)
                ])

                setSentences([
                    ...sentences.slice(0, indexOfCollidedSentence),
                    { ...sentences[indexOfCollidedSentence], completed: true, pickedWord: wordObj.word },
                    ...sentences.slice(indexOfCollidedSentence + 1)
                ])
            }
        }
    }

    return <div className='touchField' onTouchEnd={(event) => handleTouchEnd(event)}>

        {words.map((w: WordObject, i: number) => <Draggable key={w.id} index={i} text={w.word} />)}

        <div style={{ marginTop: '25%' }}>
            <h2>Lägg ditt valda ord i rätt mening</h2>
            {sentences.map((s: SentenceObject, i: number) => <Droppable key={i + 'd'} ref={refs.current[i]} {...s} />)}
        </div>

        <style jsx>{`
            .touchField {
                position: relative;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                background: green;
            }`}</style>
    </div>;
}

export default GameField;