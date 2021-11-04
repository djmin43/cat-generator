import type { NextPage } from 'next'
import Header from '../components/Header'
import Body from '../components/Body'
import axios from 'axios'

interface Props {
  result: string
}

const Home = ({result}: Props) => {
  console.log(result)
  return (
    <div>
      { result}
    </div>
  )
}

export async function getStaticProps() {
  const result = await axios.get('https://api.kanye.rest')

  return {
    props: {
      result: result.data.quote
    },
    revalidate: 5
  }
}


export default Home
