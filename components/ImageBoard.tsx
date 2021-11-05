import React, { useEffect, useState } from 'react'
import { css } from '@emotion/css'
import Image from 'next/image'

interface CatImageProps {
  catImage: string
}

const ImageBoard = ({catImage}: CatImageProps) => {

  return (
    <div>
      <div>
        <Image src={catImage} alt="cat" layout="responsive" width={300} height={300}/>
      </div>
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
