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