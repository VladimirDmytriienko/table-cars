import { useState, useEffect, useCallback, useMemo } from "react";
import { useTableSearch } from './hooks/useTableSearch';
import { Stack, Pagination } from '@mui/material';
import AddCarModal from "./components/modals/AddCarModal";
import CarModal from "./components/modals/CarModal";
import CarTable from "./components/CarTable";
import fetchData from "./services/fetchData";
import SearchField from "./components/SearchField";
import AddCarButton from "./components/AddCarButton";

const CarsTable = () => {
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [selectedCar, setSelectedCar] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    useEffect(() => {
        fetchData(setCars);
    }, []);

    const { filteredData } = useTableSearch(cars, searchTerm);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const currentItems = useMemo(() => {
        const lastIndex = currentPage * itemsPerPage;
        const firstIndex = lastIndex - itemsPerPage;
        return filteredData.slice(firstIndex, lastIndex);
    }, [currentPage, itemsPerPage, filteredData]);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const handleDeleteCar = useCallback((carId) => {
        setCars((prevCars) => {
            const updatedCars = prevCars.filter((car) => car.id !== carId);
            localStorage.setItem("cars-table", JSON.stringify(updatedCars));
            return updatedCars;
        });
    }, []);

    const handleEditCar = useCallback((car) => {
        setSelectedCar(car);
        setIsModalOpen(true);
    }, []);

    const handleSaveCar = useCallback((updatedCar) => {
        setCars((prevCars) => {
            const updatedCars = prevCars.map((car) => (car.id === updatedCar.id ? updatedCar : car));
            localStorage.setItem("cars-table", JSON.stringify(updatedCars));
            return updatedCars;
        });
        setIsModalOpen(false);
        setSelectedCar(null);
    }, []);

    const handleAddCar = (newCar) => {
        const updatedCars = [...cars, newCar];
        setCars(updatedCars);
        localStorage.setItem("cars-table", JSON.stringify(updatedCars));
        setIsAddModalOpen(false);
    };

    return (
        <div className="wrapper">
            <SearchField searchTerm={searchTerm} handleSearch={handleSearch}/>
            <AddCarButton  onClick={() => setIsAddModalOpen(true)}/>

            <CarTable cars={currentItems} onDelete={handleDeleteCar} onEdit={handleEditCar} />

            <Stack spacing={2} direction="row" mt={2} alignItems="center" justifyContent="center">
                <Pagination count={Math.ceil(filteredData.length / itemsPerPage)} page={currentPage} onChange={handlePageChange} />
                <input className="input" type="number" value={itemsPerPage} onChange={(event) => setItemsPerPage(parseInt(event.target.value))} />
            </Stack>

            <CarModal car={selectedCar} open={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSaveCar} />
            <AddCarModal open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onSave={handleAddCar} />
        </div>
    );
};

export default CarsTable;
