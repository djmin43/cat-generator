import React, { useState } from 'react'
import { css } from '@emotion/css'

interface InputProps {
  getCatImage: (text: string) => Promise<void>
}

const Input = ({getCatImage}: InputProps) => {

  const [text, setText] = useState<string>('')

  const handleButtonClick = () => {
    getCatImage(text)
  }

  return (
    <div className={inputContainer}>
      <input
        className={inputStyle}
        type="text" value={text}
        placeholder="고양이"
        onChange={(e) => setText(e.target.value)}
      />
      <button className={inputButtonStyle} onClick={handleButtonClick}>
          고양이만들기
        </button>
    </div>
  )
}

const inputContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const inputStyle = css`
`

const inputButtonStyle = css`
`

export default Input
