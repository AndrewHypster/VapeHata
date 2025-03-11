'use client'
import { useState } from 'react'
import './input.css'

const InputNum = ({value, onChange}) => {
  const [localValue, setLocalValue] = useState(value);

  const minus = () => localValue > 1? setState(localValue-1) : setState(1)
  const plus = () => localValue < 100? setState(localValue+1) : setState(100)

  const change = valueInp => {
    if (valueInp) {
      if (valueInp < 1) setState(1)
      else if (valueInp > 100) setState(100)
      else setState(valueInp)
    }
  }

  const setState = newValue => {
    setLocalValue(newValue)
    onChange(newValue)
  }

  return (
    <div className="inpt-num">
      <button type='button' onClick={minus} className="inpt-num-btn">-</button>
      <input type="number" onChange={(e) => change(parseInt(e.target.value))} value={localValue} min={1} max={100} className="inpt-num-inpt" />
      <button type='button' onClick={plus} className="inpt-num-btn">+</button>
    </div>
  )
}

export default InputNum
