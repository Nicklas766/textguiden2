export type WordObject = {
    word: string,
    tags: string[]
}

export type SentenceObject = {
    text: string,
    tag: string
}

export type GameData = {
    words: WordObject[],
    sentences: SentenceObject[]
}