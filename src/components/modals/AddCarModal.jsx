import { useEffect } from "react";
import { Modal, TextField, Button, Box, IconButton, Select, MenuItem, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, Controller } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import modalStyles from "./modalStyles";

const AddCarModal = ({ open, onClose, onSave }) => {
    const { control, handleSubmit, setValue, reset } = useForm();

    useEffect(() => {
        setValue("carId", uuidv4());
    }, [open, setValue]);

    const handleClose = () => {
        onClose();
        reset();
    };

    const handleSaveCar = (data) => {
        const newCar = {
            id: data.carId,
            car: data.company,
            car_model: data.model,
            car_color: data.color,
            car_model_year: data.year,
            car_vin: data.vin,
            price: data.price,
            availability: data.availability === "available",
        };

        onSave(newCar);
        handleClose();
    };


    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyles} >
                <IconButton sx={{ position: "absolute", top: 0, right: 0 }} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
                <h3>Add Car</h3>

                <Controller
                    name="carId"
                    control={control}
                    render={({ field }) => <input type="hidden" {...field} />}
                />
                <Controller
                    name="company"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextField label="Company" fullWidth {...field} sx={{ mb: 1.5 }}/>}
                />
                <Controller
                    name="model"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextField label="Model" fullWidth {...field} sx={{ mb: 1.5 }}/>}
                />

                <Controller
                    name="color"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextField label="Color" fullWidth {...field} sx={{ mb: 1.5 }}/>}
                />
                <Controller
                    name="year"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextField label="Year" fullWidth {...field} sx={{ mb: 1.5 }}/>}
                />
                <Controller
                    name="vin"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextField label="VIN" fullWidth {...field} sx={{ mb: 1.5 }}/>}
                />
                <Controller
                    name="price"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextField label="Price" fullWidth {...field} sx={{ mb: 1.5 }}/>}
                />
                <Controller
                    name="availability"
                    control={control}
                    defaultValue="available"
                    render={({ field }) => (
                        <Select labelId="availability-label" {...field}>
                            <MenuItem value="available">Available</MenuItem>
                            <MenuItem value="not-available">Not Available</MenuItem>
                        </Select>
                    )}
                />
                <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained" onClick={handleSubmit(handleSaveCar)}>
                        Save
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default AddCarModal;