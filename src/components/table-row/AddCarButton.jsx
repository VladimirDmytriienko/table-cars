import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const AddCarButton = ({ onClick }) => {
  return (
    <Button variant="outlined" sx={{
        color: 'gray',
        borderColor: 'gray',
        '&:hover': {
            borderColor: 'blue',
            color: 'blue',
        },
        p: '7px',
        m: '0 7px',

    }} startIcon={<AddIcon />} onClick={onClick}>
        Add Car
    </Button>
  )
}

export default AddCarButton