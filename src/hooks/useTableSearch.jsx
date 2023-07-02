import { useState, useEffect } from "react";

export const useTableSearch = (data, searchVal) => {
    const [filteredData, setFilteredData] = useState([]);
  
    useEffect(() => {
      if (searchVal) {
        const filtered = data.filter((car) =>
          car.car.toLowerCase().includes(searchVal.toLowerCase()) ||
          car.car_model.toLowerCase().includes(searchVal.toLowerCase()) ||
          car.car_vin.toLowerCase().includes(searchVal.toLowerCase()) ||
          car.car_color.toLowerCase().includes(searchVal.toLowerCase()) ||
          String(car.car_model_year).includes(searchVal) ||
          car.price.toLowerCase().includes(searchVal.toLowerCase()) ||
          String(car.availability).toLowerCase().includes(searchVal.toLowerCase())
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(data);
      }
    }, [searchVal, data]);
  
    return { filteredData };
};