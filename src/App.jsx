import logo from './logo.svg';
import './App.css';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import DogImage from './DogImage/DogImage';
import RandomDog from './RandomDog/RandomDog';


function App() {
  return (

    <Stack direction={'column'} spacing={3} width={'30%'} margin={'auto'} justifyContent="center"
    alignItems="center">
      <h2 style={{textAlign:'center'}}>Dogs App</h2>
      <RandomDog />
          </Stack>
  );
}

export default App;
