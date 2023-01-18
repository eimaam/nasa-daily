import React, { useEffect, useState } from 'react'


export const ImageToday = () => {
    interface ImageProps{
        date: string,
        title: string,
        details: string,
        url: string,
    }

    const [photoDetails, setPhotoDetails] = useState<ImageProps>({
        date: "",
        title: "",
        details: "",
        url: "",
    });

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
    <div>
        <img src={photoDetails.url} alt="" />
    </div>
  )
}
