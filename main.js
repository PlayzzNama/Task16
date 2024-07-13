const Lambo = {
    Name: "Lamborghini",
    Model: "Aventador",
    MaxSpeed: 350,
    color: "red",

    toString: function() {
       return `Hello! I'm ${this.Name} ${this.Model}, my max speed: ${this.MaxSpeed}km/h. Most used color is ${this.color}` 
    },

    CompareToObject: function(car) {
        if(car.Model === Lambo.Model && car.Color === Lambo.color && car.Name === Lambo.Name && car.MaxSpeed === Lambo.MaxSpeed) {
            console.log(`This is the same car.`)
        } else if (car.Name === Lambo.Name) {
            console.log(`It's ${car.Name} ${car.Model} and these the same brand car with ${Lambo.Name} ${Lambo.Model}, but other model.`)
        } else {
            console.log(`It's ${car.Name} ${car.Model} and this is not the same car with ${Lambo.Name} ${Lambo.Model}.`)
        }
    }

}

const Lambo_HK = {
    Name: "Lamborghini",
    Model: "Huracan",
    MaxSpeed: 320,
    color: "yellow"
}

const Ferrari = {
    Name: "Ferrari",
    Model: "f40",
    MaxSpeed: 367,
    color: "red"
}

console.log(Lambo.toString())
console.log(Lambo.CompareToObject(Lambo_HK))
console.log(Lambo.CompareToObject(Ferrari))

