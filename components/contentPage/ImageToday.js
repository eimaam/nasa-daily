// import { Footer } from '../Footer';
import { Header } from './Header';
import styles from "../../styles/imagePage.module.scss"




const ImageToday = ({ date, title, explanation, url }) => {


  return (
    <>
    <div className={styles.imageToday}>
        <Header date={date} />
        <div>
            <img src={url} alt={title} />
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
    {/* <Footer /> */}
    </>
  )
}

export default ImageToday;