import { Button } from "@mui/material"
import DogImage from "../DogImage/DogImage"
import { useEffect, useState } from "react"
import axios from 'axios'
import { CircularProgress } from '@mui/material';

const URL = "https://random.dog/woof.json"

const RandomDog =  ({url, setUrl}) =>{
    // const [url, setUrl] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () =>{
            await handleShowClick()
        }
        fetchData()}, [])
    const handleShowClick = async () => {
    let dogUrl = null
    setIsLoading(true)
    setUrl(null)
        do {
        const response= await axios.get(URL)
        dogUrl = response.data.url
    } while ( ! (dogUrl.endsWith('jpg') || dogUrl.endsWith('jpeg') || dogUrl.endsWith('png') || dogUrl.endsWith('JPG')))
        setUrl(dogUrl)
        // setIsLoading(false)
    
    }
    

    return(
        <>
        <Button onClick={handleShowClick} variant="outlined">SHOW ME A DOG</Button>
        {isLoading && <CircularProgress />}
        
        <DogImage size={'450px'} url={url} setLoading={setIsLoading} />
        </>

    )
}
export default RandomDog