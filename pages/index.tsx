import type { NextPage } from 'next'
import {QuoteProps} from '../constants/types'
import Main from '../components/Main'
import axios from 'axios'

const Home = ({quote}: QuoteProps) => {
  return (
    <Main
      quote={quote}
    />
  )
}

export async function getStaticProps() {
  const result = await axios.get('https://api.kanye.rest')

  return {
    props: {
      quote: result.data.quote
    },
    revalidate: 60 * 60
  }
}


export default Home
