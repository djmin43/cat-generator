import React, { useState, useEffect } from 'react'
import ImageBoard from './ImageBoard'
import Header from './Header'
import Input from './Input'
import { QuoteProps } from '../constants/types'

const Main = ({quote}: QuoteProps) => {

  const [catImage, setCatImage] = useState('')

  const getCatImage = async (text: string) => {
    const catImageQueryString = `/cat/says/:${text}`
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
      <Input
        getCatImage={getCatImage}
      />
    </div>
  )
}

export default Main
