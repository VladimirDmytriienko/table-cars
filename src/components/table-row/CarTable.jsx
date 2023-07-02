import CarTr from "./CarTr";

const CarTable = ({ cars, onDelete, onEdit }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Model</th>
            <th>Color</th>
            <th>Year</th>
            <th>VIN</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <CarTr key={car.id} car={car} onDelete={onDelete} onEdit={onEdit} />
          ))}
        </tbody>
      </table>
    );
  };

export default CarTable