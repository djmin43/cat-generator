import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import axios from 'axios'

const Body: NextPage = () => {

  const [mainQuote, setMainQuote] = useState<string>('')

  const getKanyeQuote = async () => {
    const result: string = await axios.get('https://api.kanye.rest')
    setMainQuote(result)
    console.log(mainQuote)
  }

  useEffect(() => {
    getKanyeQuote()
  })

  return (
    <div>
      body
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Body
