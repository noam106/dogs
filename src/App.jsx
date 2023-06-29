import logo from './logo.svg';
import './App.css';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import DogImage from './DogImage/DogImage';
import RandomDog from './RandomDog/RandomDog';
import DogsList from './DogsList/DogsList';
import { useState } from 'react';


function App() {

  const [dogsList, setDogsList] = useState([])
  const handleAddDog = () =>{
    const newDogsList = [...dogsList, currentUrl]
    setDogsList(newDogsList)
  }
  const [currentUrl, setCurrentUrl] = useState(null)

  const handleRemoveDog = (urlToRemove) => {
    const newDogsList = dogsList.filter(url => url !== urlToRemove)
    setDogsList(newDogsList)
  }
  
  return (

    <Stack direction={'column'} spacing={3} width={'30%'} margin={'auto'} justifyContent="center"
    alignItems="center">
      <h2 style={{textAlign:'center'}}>Dogs App</h2>
      <RandomDog url={currentUrl} setUrl={setCurrentUrl} />
      <Button onClick={handleAddDog} disabled={dogsList.includes(currentUrl)}>
        ADD
      </Button>
      <DogsList onRemoveDog={handleRemoveDog} dogsList={dogsList}/>
      
          </Stack>
  );
}

export default App;
