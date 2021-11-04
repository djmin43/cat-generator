import React from 'react'
import { QuoteProps } from '../constants/types'

const Header = ({quote}: QuoteProps) => {
  return (
    <div>
      <h1>Cat Generator</h1>
      <span>
      &#34;{quote}&#34;
      </span>
    </div>
  )
}

export default Header
