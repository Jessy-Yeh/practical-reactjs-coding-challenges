import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import './index.scss'

interface Props {
  setNumberOfCharacters: Dispatch<SetStateAction<number>>
}

const TextArea = ({ setNumberOfCharacters }: Props) => {
  const [words, setWords] = useState('')

  return (
    <textarea
      className="text-area"
      placeholder="Paste your text here..."
      value={words}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputWords = event.target.value
        setNumberOfCharacters(inputWords.length)
        setWords(inputWords)
      }}
    />
  )
}

export default TextArea
