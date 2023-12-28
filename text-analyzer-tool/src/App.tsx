import { useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

const App = () => {
  const [numberOfCharacters, setNumberOfCharacters] = useState(0)
  const [numberOfWords, setNumberOfWords] = useState(0)
  const [numberOfSentences, setNumberOfSentences] = useState(0)
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox
            numberOfCharacters={numberOfCharacters}
            numberOfWords={numberOfWords}
            numberOfSentences={numberOfSentences}
          />
          <TextArea
            setNumberOfCharacters={setNumberOfCharacters}
            setNumberOfWords={setNumberOfWords}
            setNumberOfSentences={setNumberOfSentences}
          />
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
