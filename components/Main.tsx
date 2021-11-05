import React, { useState, useEffect } from 'react'
import ImageBoard from './ImageBoard'
import Header from './Header'
import { QuoteProps } from '../constants/types'

const Main = ({quote}: QuoteProps) => {

  const [catImage, setCatImage] = useState(`https://cataas.com/cat/says/${quote}`)

  const getCatImage = () => {
    const catImageQueryString = `https://cataas.com/cat/says/${quote}`
    setCatImage(catImageQueryString)
  }

  return (
    <div>
      <Header
        quote={quote}
      />
      <img src={catImage} alt="cat"/>
      <button onClick={() => getCatImage()}>
          고양이만들기
      </button>
    </div>
  )
}

export default Main
