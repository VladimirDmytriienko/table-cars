import {TextField, Button, } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
const Header = ({searchTerm, onSearch, onAddCar }) => {
  return (
    <section className="header">
                <TextField
                    id="outlined-basic" label="Search" variant="outlined"
                    type="text"
                    value={searchTerm}
                    onChange={onSearch}
                    placeholder="Search..."
                    size="small"
                />
                <Button variant="outlined" sx={{
                    color: 'gray',
                    borderColor: 'gray',
                    '&:hover': {
                        borderColor: 'blue',
                        color: 'blue',
                    },
                    p: '7px',
                }} startIcon={<AddIcon />} onClick={onAddCar}>
                    Add Car
                </Button>
            </section>
  )
}

export default Header