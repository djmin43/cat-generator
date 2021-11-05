import React, { useState, useEffect } from 'react'
import ImageBoard from './ImageBoard'
import Header from './Header'
import Input from './Input'
import { QuoteProps } from '../constants/types'

const Main = ({quote}: QuoteProps) => {

  const [catImage, setCatImage] = useState('https://cataas.com/cat/says/hello')

  const getCatImage = async (text: string) => {
    const catImageQueryString = `https://cataas.com/cat/says/${text}`
    setCatImage(catImageQueryString)
  }

  return (
    <div>
      <Header
        quote={quote}
      />
      <ImageBoard
        catImage={catImage}
      />
      <button className={inputButtonStyle} onClick={handleButtonClick}>
          고양이만들기
      </button>
    </div>
  )
}

export default Main
