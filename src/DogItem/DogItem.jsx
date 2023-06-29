import DogImage from "../DogImage/DogImage"
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const DogsItem = ({url, onRemoveDog}) =>{
    const splitArray = url.split('/')
    const fileName = splitArray[splitArray.length-1]
    return(
        <>
        <ListItem alignItems="flex-start" secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => onRemoveDog(url)}>
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  }>
            <DogImage addMargin={true} size={'50px'} url={url} setLoading={()=>{}}/>
            <ListItemText primary={fileName} />
            
        </ListItem>
        <Divider variant="middle" component="li" />
        </>
    )
}
export default DogsItem