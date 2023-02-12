import ImageToday  from '@/components/contentPage/ImageToday'
import Nav from '@/components/Nav'
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

const myStyles = {
  padding: "0.5rem", 
    fontSize: "1rem",
    color: "white",
    textTransform: "capitalize",
    backgroundColor: "#105bd8",
    
    cursor: "pointer",
}

export default function PhotoToday({ result }) {
  const { data: session } = useSession()

  if(!session){
    return (
    <div style={{width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}> 
      <p >{`You're not logged in`}</p>
        <button style={{backgroundColor: "#105bd8", padding: "1rem", color: "#fff", borderRadius: "0.5rem", margin: "0.5rem"}}  onClick={() => signIn()}>Sign in</button>
    </div>
    )
  }

  return (
    <div>
    <Head>
      <title>{`Today's Image`}</title>
    </Head>
    <Nav />
      <ImageToday 
        date={result.date}
        title={result.title}
        url={result.url}
        explanation={result.explanation}
      />
    </div>
  )
}
