const car = {
  speed: 0,
  color: "Red",
  accelerate: function () {
    this.speed += 5;
    console.log(this.speed);
    return this;
  },
  break: function () {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  },
  honk: function () {
    console.log("HOOOOONK!!!!!!");
    return this;
  },
  toString: () => {
    return this.color + " " + this.speed;
  },
};

car.honk().honk().accelerate().accelerate().honk().honk().break().break();

let authorToInsert = "<p class='car'>" + car.toString() + "</p>";

while (i < 10) {}


