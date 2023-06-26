import { useEffect, useState } from "react"

const DogImage = ({size, url, setLoading}) =>{

    const [imgLoaded, setImgLoaded] = useState(false)

    useEffect(
        () => setImgLoaded(false),
        [url])

    const handleFinshLoading = () =>{
        setImgLoaded(true)
        setLoading(false)
    }
    return(
        <img style={{width: size, height: size, objectFit: 'cover', borderRadius: "15px",
         visibility: url && imgLoaded ? "visible" : "hidden"}}
        src={url} onLoad={handleFinshLoading}
        />
    )
}

export default DogImage