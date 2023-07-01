import React, { useEffect } from "react";
import { Modal, TextField, Button, Box, IconButton, Select, MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, Controller } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const AddCarModal = ({ open, onClose, onSave }) => {
    const { control, handleSubmit, setValue, reset } = useForm();

    useEffect(() => {
        setValue("carId", uuidv4());
    }, [setValue]);

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
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxHeight: "88vh",
                    width: 400,
                    backgroundColor: "white",
                    p: 4,
                    borderRadius: 4,
                    boxShadow: 24,
                }}
            >
                <IconButton sx={{ position: "absolute", top: 0, right: 0 }} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
                <h2>Add Car</h2>
                <Controller
                    name="carId"
                    control={control}
                    render={({ field }) => <input type="hidden" {...field} />}
                />
                <TextField label="Company" sx={{ mb: 1.5 }} fullWidth name="company" control={control} defaultValue="" />
                <TextField label="Model" sx={{ mb: 1.5 }} fullWidth name="model" control={control} defaultValue="" />
                <TextField label="Color" sx={{ mb: 1.5 }} fullWidth name="color" control={control} defaultValue="" />
                <TextField label="Year" sx={{ mb: 1.5 }} fullWidth name="year" control={control} defaultValue="" />
                <TextField label="VIN" sx={{ mb: 1.5 }} fullWidth name="vin" control={control} defaultValue="" />
                <TextField label="Price" sx={{ mb: 1.5 }} fullWidth name="price" control={control} defaultValue="" />
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