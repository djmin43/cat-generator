import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const ImageBoard = () => {

  const [catImage, setCatImage] = useState('')

  return (
    <div>
      <Image src="https://cataas.com/cat" alt="cat" />
    </div>
  )
}


const getCatImage = async (text: string): string => {
  
}

export default ImageBoard
