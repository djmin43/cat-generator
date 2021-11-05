import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { css } from '@emotion/css'



const ImageBoard = () => {

  const [catImage, setCatImage] = useState('')

  return (
    <div className={imageContainerStyle}>
      <Image src="https://cataas.com/cat" alt="cat" layout="fill" objectFit="contain"/>
    </div>
  )
}


// const getCatImage = async (text: string): void => {
  
// }


const imageContainerStyle = css`
  width: 15vw;
  height: 15vw;
  border: 1px solid rgba(0, 0, 0, 0.12);
`

export default ImageBoard
