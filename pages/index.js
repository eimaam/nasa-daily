import Link from 'next/link';
import Footer  from '@/components/Footer'
import Image from 'next/image';
import nasaLogo from "../public/NASA.jpg"
import styles from "../styles/home.module.scss"
import Nav from '@/components/nav';


export default function Home(){
  return (
    <>
    <Nav />
    <div id='home' className={styles.home}>
    <header className={styles.header}>
      <div className={styles.details}>
        <div style={{ margin : "auto"}}>
          <h1 className="h1">NASA DAILY</h1>
          <h3 className={styles.h3}>get new amazing images or photograph of Space with <br /> fascinating details about them daily. </h3>
        </div>
        <Image className="img" src={nasaLogo} width={600} height={500} alt="nasa logo"/>
          {/* <img src={nasaLogo} alt="Nasa Logo" />           */}
      </div>
      <br />
      <br />
      <h1 className="h1">
        <button className={styles.button}>
          <Link href="photo-today">
          EXPLORE
          </Link>
        </button>
      </h1>
    </header>
    </div>
    <Footer />
    </>
  )
}
