export type WordObject = {
    word: string,
    tags: string[]
}

export type SentenceObject = {
    text: string,
    tag: string
}

export type GameData = {
    pos: string,
    words: WordObject[],
    sentences: SentenceObject[]
}