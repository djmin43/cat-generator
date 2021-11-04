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

export default ImageBoard
