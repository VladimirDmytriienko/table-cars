import { useState } from "react";
import { MenuItem, Menu, Button } from "@mui/material";
import DeleteModal from "./DeleteModal";

const CarTr = ({ car, onDelete, onEdit }) => {
    const [anchorEl, setAnchorEl] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleMenuClose = () => {
        setAnchorEl(false);
    };

    const handleDelete = () => {
        setDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        setDeleteModalOpen(false);
        onDelete(car.id);
    };

    const handleCancelDelete = () => {
        setDeleteModalOpen(false);
    };

    const handleEdit = () => {
        onEdit(car);
    };

    return (
        <tr key={car.id}>
            <td>{car.car}</td>
            <td>{car.car_model}</td>
            <td>{car.car_color}</td>
            <td>{car.car_model_year}</td>
            <td>{car.car_vin}</td>
            <td>{car.price}</td>
            <td>{car.availability ? 'Available' : 'Not Available'}</td>
            <td>
                <div>
                    <Button
                        variant="outlined"
                        sx={{
                            color: 'gray',
                            borderColor: 'gray',
                            '&:hover': {
                                borderColor: 'blue',
                                color: 'blue',
                            },
                            p: '10px',
                            minWidth: '100%',
                            maxHeight: '32px'
                        }}

                        onClick={handleMenuOpen}
                    >
                        Action
                    </Button>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} sx={{minWidth: '100%',}}>
                        <MenuItem onClick={handleEdit} >Edit</MenuItem>
                        <MenuItem onClick={handleDelete}>Delete</MenuItem>
                    </Menu>
                    <DeleteModal
                        open={deleteModalOpen}
                        onCancel={handleCancelDelete}
                        onConfirm={handleConfirmDelete}
                    />
                </div>

            </td>
        </tr>
    );
};

export default CarTr;
