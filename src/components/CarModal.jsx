import React, { useEffect } from "react";
import { Modal, TextField, Button, Box, IconButton, Select, MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, Controller } from "react-hook-form";

const CarModal = ({ car, open, onClose, onSave }) => {
  const { control, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (car) {
      setValue("carColor", car.car_color);
      setValue("carPrice", car.price);
      setValue("availability", car.availability ? "available" : "not-available");
    }
  }, [car, setValue]);

  const handleClose = () => {
    onClose();
  };

  const handleSaveCar = (data) => {
    const updatedCar = {
      ...car,
      car_color: data.carColor,
      price: data.carPrice,
      availability: data.availability === "available",
    };

    onSave(updatedCar);
  };

  if (!car) {
    return null;
  }

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
        <h2>Edit Car</h2>
        <TextField label="Company" size="small" value={car.car} disabled fullWidth sx={{ mb: 2 }} />
        <TextField label="Model" size="small" value={car.car_model} disabled fullWidth sx={{ mb: 2 }} />
        <TextField label="VIN" size="small" value={car.car_vin} disabled fullWidth sx={{ mb: 2 }} />
        <TextField
          label="Color"
          size="small"
          name="carColor"
          control={control}
          defaultValue={car.car_color}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField label="Year" size="small" value={car.car_model_year} disabled fullWidth sx={{ mb: 2 }} />
        <TextField
          label="Price"
          size="small"
          name="carPrice"
          control={control}
          defaultValue={car.price}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Controller
          name="availability"
          control={control}
          defaultValue={car.availability ? "available" : "not-available"}
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

export default CarModal;
