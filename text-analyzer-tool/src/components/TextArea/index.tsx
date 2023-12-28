import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import './index.scss'

interface Props {
  setNumberOfCharacters: Dispatch<SetStateAction<number>>
  setNumberOfWords: Dispatch<SetStateAction<number>>
  setNumberOfSentences: Dispatch<SetStateAction<number>>
}

const TextArea = ({ setNumberOfCharacters, setNumberOfWords, setNumberOfSentences }: Props) => {
  const [words, setWords] = useState('')

  return (
    <textarea
      className="text-area"
      placeholder="Paste your text here..."
      value={words}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputWords = event.target.value
        const wordsCount = inputWords.split(' ').filter((word) => word !== '')
        let dotsCount = 0

        inputWords.split(' ').forEach((word, index) => {
          if (word.includes('.')) {
            const isMoreThan1Dot = word.split('').filter((letter) => letter === '.').length === 1

            if (isMoreThan1Dot) {
              dotsCount++
            }
          }
        })

        setWords(inputWords)
        setNumberOfCharacters(inputWords.length)
        setNumberOfWords(wordsCount.length)
        setNumberOfSentences(dotsCount)
        console.log(dotsCount)
      }}
    />
  )
}

export default TextArea
