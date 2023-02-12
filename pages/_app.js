import { SessionProvider }  from "next-auth/react"
import { Alef } from "@next/font/google"

const alef = Alef({ 
  weight: ['400', '700'], 
  subsets: ['latin']
})

export default function App({ Component, pageProps, session }) {

  return (
    <SessionProvider session={session}>
      <main className={alef.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}
