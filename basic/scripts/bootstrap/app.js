define(['models/car', 'low'], function (Car, _) {

    var cars = [];
    cars.push(new Car('Audi', 'A1', 3));
    cars.push(new Car('Audi', 'A4', 4));
    cars.push(new Car('Volkswagen', 'Golf', 5));

    _.each(cars, car => car.toString());
});
