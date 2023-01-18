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
        {/* <img src={photoDetails.url} alt="" /> */}
        <img src={dummyPhoto} alt={title} />
        <h2>{title}</h2>
        <div>
            <h2>Image Details:</h2>
            <p>{explanation}</p>
        </div>
    </div>
    <Footer />
    </>
  )
}
