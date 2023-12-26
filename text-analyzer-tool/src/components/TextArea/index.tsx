import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import './index.scss'

interface Props {
  setNumberOfCharacters: Dispatch<SetStateAction<number>>
  setNumberOfWords: Dispatch<SetStateAction<number>>
}

const TextArea = ({ setNumberOfCharacters, setNumberOfWords }: Props) => {
  const [words, setWords] = useState('')

  return (
    <textarea
      className="text-area"
      placeholder="Paste your text here..."
      value={words}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputWords = event.target.value
        let wordsCount = inputWords.split(' ').filter((word) => word !== '')

        setNumberOfCharacters(inputWords.length)
        setNumberOfWords(wordsCount.length)
        setWords(inputWords)
      }}
    />
  )
}

export default TextArea
