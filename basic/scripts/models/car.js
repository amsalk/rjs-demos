define([], function () {
    var Car = function (name, type, doors) {
        this.name = name;
        this.type = type;
        this.doors = doors;
    };

    Car.prototype.toString = function () {
        console.log('Car: ' + this.name + ' ' + this.type + ' number of doors: ' + this.doors);
    }

    return Car;
});
