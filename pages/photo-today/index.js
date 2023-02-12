import ImageToday  from '@/components/contentPage/ImageToday'
import { signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=XVSgPag6qsDHs5MyMoYgEl7DedgA078UG8Qtr0Yw')
  const data = await res.json()

  return {
    props: { result: data }
  }
}

export default function PhotoToday({ result }) {
  const { data: session } = useSession()

  if(!session){
    return <div> 
      <p>You're not logged in </p>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
  }

  return (
    <div>
    <Head>
      <title>Today's Image</title>
    </Head>
      <ImageToday 
        date={result.date}
        title={result.title}
        url={result.url}
        explanation={result.explanation}
      />
    </div>
  )
}
