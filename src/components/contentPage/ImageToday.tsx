import React, { useEffect, useState } from 'react'
import { Footer } from '../Footer';
import { Header } from './Header';

interface ImageProps{
    date: string,
    title: string,
    explanation: string,
    url: string,
}

export const ImageToday = () => {
   console.log(localStorage)

    const [photoDetails, setPhotoDetails] = useState<ImageProps>({
        date: "",
        title: "",
        explanation: "",
        url: "",
    });

    const { date, title, explanation, url } = photoDetails;

    useEffect(() => {
        const fetchImage = async () => {
            try{
                fetch(`https://api.nasa.gov/planetary/apod?api_key=XVSgPag6qsDHs5MyMoYgEl7DedgA078UG8Qtr0Yw`)
                .then(res => res.json())
                .then(data => setPhotoDetails(data))
            }
            catch(err:any){
                console.log(err.message)
            }
        }

        fetchImage()

    }, [])


  return (
    <>
    <div className='image--today'>
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
    <Footer />
    </>
  )
}
