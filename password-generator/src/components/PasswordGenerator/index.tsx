import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Checkbox from '../Checkbox'

import passwordGif from '../../assets/gif/password.gif'
import copyIcon from '../../assets/icons/copy.svg'
import refreshIcon from '../../assets/icons/refresh.svg'

import './index.css'

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState<number>(10)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)

  const [uppercaseChecked, setUppercaseChecked] = useState(true)
  const [lowercaseChecked, setLowercaseChecked] = useState(false)
  const [numbersChecked, setNumbersChecked] = useState(false)
  const [specialCharsChecked, setSpecialCharsChecked] = useState(true)

  const handleUppercaseChange = () => {
    setUppercaseChecked((prev) => !prev)
  }

  const handleLowercaseChange = () => {
    setLowercaseChecked((prev) => !prev)
    if (!uppercaseChecked && !numbersChecked && !specialCharsChecked) {
      setLowercaseChecked(true)
    }
  }

  const handleNumbersChange = () => {
    setNumbersChecked((prev) => !prev)
  }

  const handleSpecialCharsChange = () => {
    setSpecialCharsChecked((prev) => !prev)
  }

  const onChangePasswordLength = (value: number) => {
    setPasswordLength(value)
  }

  const generatePassword = () => {
    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
    const specialChars = '!@#$%^&*()_+{}|:<>?'
    const numbers = '0123456789'

    let charset = ''

    if (uppercaseChecked) {
      charset += upperLetters
    }
    if (lowercaseChecked) {
      charset += lowerLetters
    }
    if (specialCharsChecked) {
      charset += specialChars
    }
    if (numbersChecked) {
      charset += numbers
    }

    let generatedPassword = ''

    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }

    setPassword(generatedPassword)
  }

  useEffect(() => {
    generatePassword()
  }, [])

  return (
    <div className="password-wrapper">
      <div className="gif">
        <img src={passwordGif} alt="Password Gif" />
      </div>
      <div className="tac">
        <h2 className="title">PASSWORD GENERATOR</h2>
        <p className="subtitle">
          Ensure online account safety by creating strong and secure passwords
        </p>
      </div>
      <div className="password-input-wrapper">
        <div className="password-field">
          <input type="text" placeholder="your password" value={password} />
          <img src={refreshIcon} alt="refresh the password" onClick={generatePassword} />
        </div>
        <CopyToClipboard text={password} onCopy={() => setCopied(true)}>
          <button className="copy-btn">
            <img src={copyIcon} alt="copy password" />
            Copy
          </button>
        </CopyToClipboard>
      </div>
      <span className="fw-500">Weak</span>
      <div className="slider">
        <div>
          <label id="slider-label">Password Length: </label>
          <span>{passwordLength}</span>
        </div>
        <Slider
          max={30}
          min={5}
          value={passwordLength}
          onChange={onChangePasswordLength}
          className="slider-style"
        />
      </div>
      <div className="elements">
        <Checkbox
          id="uppercase"
          label="Uppercase"
          checked={uppercaseChecked}
          name="upper"
          onChange={handleUppercaseChange}
        />
        <Checkbox
          id="lowercase"
          label="Lowercase"
          checked={lowercaseChecked}
          name="lower"
          onChange={handleLowercaseChange}
        />
        <Checkbox
          id="numbers"
          label="Numbers"
          checked={numbersChecked}
          name="numbers"
          onChange={handleNumbersChange}
        />
        <Checkbox
          id="special chars"
          label="Special Characters"
          checked={specialCharsChecked}
          name="specialChars"
          onChange={handleSpecialCharsChange}
        />
      </div>
    </div>
  )
}

export default PasswordGenerator
