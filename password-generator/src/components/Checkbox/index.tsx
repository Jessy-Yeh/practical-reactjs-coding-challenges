import { ChangeEventHandler } from 'react'
import './index.css'

interface Props {
  id: string
  label: string
  checked: boolean
  name: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Checkbox = ({ id, label, checked, name, onChange }: Props) => {
  return (
    <div className="checkbox-wrapper">
      <input id={id} type="checkbox" checked={checked} name={name} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox
