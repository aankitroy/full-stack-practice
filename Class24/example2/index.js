
function Car(color, modal, price) {
    this.color = color;
    this.modal = modal;
    this.price = price;
}

Car.prototype.getTotalPrice = function(taxP) {
    return this.price + this.price * taxP * 0.1;
}

const car = new Car('red', 'BMW', 10000);
console.log(car.getTotalPrice(25));
