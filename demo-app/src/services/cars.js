

export const refreshCars = async () => {

  const res = await fetch('http://localhost:3050/cars');
  const cars = await res.json();

  return cars;
};

export const appendCar = async (car) => {

  const res = await fetch('http://localhost:3050/cars', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  });

  const appendedCar = await res.json();

  return appendedCar;

};

export const replaceCar = async (car) => {

  await fetch('http://localhost:3050/cars/' + encodeURIComponent(car.id), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  });

};

export const deleteCar = async (carId) => {

  await fetch('http://localhost:3050/cars/' + encodeURIComponent(carId), {
    method: 'DELETE',
  });

};