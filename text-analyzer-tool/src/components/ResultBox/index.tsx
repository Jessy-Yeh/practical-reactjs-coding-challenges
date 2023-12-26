import './index.scss'

interface Props {
  numberOfCharacters: number
  numberOfWords: number
}

const ResultBox = ({ numberOfCharacters, numberOfWords }: Props) => {
  const resultBar = [
    {
      title: 'Words',
      value: `${numberOfWords}`,
    },
    {
      title: 'Characters',
      value: `${numberOfCharacters}`,
    },
    {
      title: 'Sentences',
      value: 0,
    },
    {
      title: 'Paragraphs ',
      value: 0,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
