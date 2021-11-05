import React, { useEffect, useState } from 'react'
import { css } from '@emotion/css'

interface CatImageProps {
  catImage: string
}

const ImageBoard = ({catImage}: CatImageProps) => {

  return (
    <div className={imageContainerStyle}>
      <img src={catImage} alt="cat" />
    </div>
  )
}

const imageContainerStyle = css`
  width: 100vw;
  height: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ImageBoard
