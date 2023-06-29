import DogsItem from "../DogItem/DogItem"
import List from '@mui/material/List';

const DogsList = ({dogsList, onRemoveDog}) =>{
    const items = dogsList.map((dogUrl) => {return(
        <DogsItem key={dogUrl} url={dogUrl} onRemoveDog = {onRemoveDog} />
    )})
    
    return(

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {items}
        </List>
        
    )
}
export default DogsList