    class Animal {
        name;
        weight;

        constructor(name, weight) {
            this.name = name;
            this.weight = weight;
        }

        setName(name) {
            this.name  = name;
        }

        setWeight(weight) {
            this.weight = weight;
        }

        getName() {
            return this.name;
        }

        getWeight() {
            return this.weight;
        }

        toString() {
            return "Name Is: " + this.getName() + " & Weight Is: " + this.getWeight();
        }
        changName(changName) {
            this.name = changName;
        }
    }

    let objAnimal1 = new Animal('Elephant', 45.6);

    objAnimal1.toString();

    let objAnimal2 = new Animal('', 1);

    objAnimal2.changName('Mouse');

    console.log(objAnimal1);

    console.log(objAnimal2);
