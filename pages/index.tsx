import type { NextPage } from 'next'
import {QuoteProps} from '../constants/types'
import Header from '../components/Header'
import axios from 'axios'


const Home = ({quote}: QuoteProps) => {
  return (
    <div>
      <Header
        quote={quote}
      />
    </div>
  )
}

export async function getStaticProps() {
  const result = await axios.get('https://api.kanye.rest')

  return {
    props: {
      quote: result.data.quote
    },
    revalidate: 5
  }
}


export default Home
