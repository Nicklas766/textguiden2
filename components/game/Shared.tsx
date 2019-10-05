export type WordObject = {
    id: number,
    word: string,
    tags: string[]
}

export type SentenceObject = {
    text: string,
    tag: string,
    completed: boolean,
    pickedWord: string
}

export type GameData = {
    words: WordObject[],
    sentences: SentenceObject[]
}

export const MockApi = {

    getData(): Promise<GameData> {
        return new Promise<GameData>((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    {
                        words: [
                            { id: 0, word: 'hej', tags: ['a'] },
                            { id: 1, word: 'du', tags: ['b'] },
                            { id: 2, word: 'rolig', tags: ['c'] },
                            { id: 3, word: 'du', tags: ['b'] },
                        ],
                        sentences: [
                            { text: '(?) på dig', tag: 'a', completed: false, pickedWord: '' },
                            { text: '(?) är fin', tag: 'b', completed: false, pickedWord: '' },
                            { text: '(?) är fin', tag: 'b', completed: false, pickedWord: '' },
                            { text: 'du är (?)!', tag: 'c', completed: false, pickedWord: '' }
                        ]
                    }
                )
            }, 0);
        });
    }
}