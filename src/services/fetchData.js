import axios from 'axios';

const fetchData = async (setCars) => {
    try {
        const carsData = localStorage.getItem("cars-table");
        if (carsData) {
            setCars(JSON.parse(carsData));
        } else {
            const response = await axios.get("https://myfakeapi.com/api/cars/");
            setCars(response.data.cars);

            localStorage.setItem("cars-table", JSON.stringify(response.data.cars));
        }
    } catch (error) {
        console.log('Error fetching car data:', error);
    }
};

export default fetchData;
