import { Header } from './Header';
import styles from "../../styles/imagePage.module.scss"
import Footer from '../Footer';
import Image from 'next/image';




const ImageToday = ({ date, title, explanation, url }) => {


  return (
    <>
    <div className={styles.imageToday}>
        <Header date={date} />
        <div>
            <Image src={url} alt={title} width={800} height={450} className={styles.image}/>
        </div>
            <h2>{title}</h2>
            <h4>Image Credit: <i>NASA</i></h4>
        <hr />
        <div>
            <h2>Image Details:</h2>
            <p>{explanation}</p>
        </div>
        <h4>Credit: <i>NASA</i></h4>

        <hr />
    </div>
    <Footer />
    </>
  )
}

export default ImageToday;