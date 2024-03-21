// Exercise 45 Cars
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}
function create_car(manufacturer: string, model: string, ...options: [string, any][]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        model: model
    };
    for (const [key, value] of options) {
        car[key] = value;
    }
    return car;
}
const car: Car = create_car('Toyota', 'Corolla', ['color', 'blue'], ['year', 2022], ['fuelType', 'petrol']);
console.log(car);