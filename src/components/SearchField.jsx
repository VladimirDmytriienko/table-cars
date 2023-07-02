import { TextField } from '@mui/material';

const SearchField = ({ searchTerm, handleSearch }) => {
    return (
        <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search..."
            size="small"
        />
    )
}

export default SearchField