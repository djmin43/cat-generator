import type { NextPage } from 'next'

const Body: NextPage = () => {
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
