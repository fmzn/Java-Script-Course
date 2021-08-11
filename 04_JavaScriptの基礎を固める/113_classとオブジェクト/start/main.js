document.addEventListener("DOMContentLoaded", () => {
    const obj = {
        first_name: "Mafia",
        last_name: "Code",
    };

    class Dog {
        constructor(dogName, breed, color, size, hairLength, origin) {
            this.hp = 100;
            this.legs = 4;
            this.isTongeOut = true;
            this.areEarsStanding = true;
            this.isShakingTail = true;
            this.name = dogName;
            this.breed = breed;
            this.color = color;
            this.size = size;
            this.hairLength = hairLength;
            this.origin = origin;
        }

        bark() {
            console.log(`${this.name}: WOOF WOOF!!`);
        }

        attack(enemyDog) {
          console.log(`${enemyDog.name}'s health before attack: ${enemyDog.hp}`)
          enemyDog.hp = enemyDog.hp - 10
          console.log(`${enemyDog.name}'s health after attack: ${enemyDog.hp}`)
        }
    }

    let lupita = new Dog(
        "Lupita",
        "English Bulldog",
        "Brown",
        "Medium",
        "Short",
        "Colombia"
    );

    let hana = new Dog(
        "Hana",
        "Shiba inu",
        "Black",
        "Medium",
        "Short",
        "Japan"
    );

    let barkLupita = document
        .querySelector("#bark-lupita")
        .addEventListener("click", () => {
            lupita.bark();
        });

    let barkHana = document
        .querySelector("#bark-hana")
        .addEventListener("click", () => {
            hana.bark();
        });

    let lupitaAttacksBtn = document
        .querySelector("#lupita-attacks")
        .addEventListener("click", () => {
            console.log("Lupita attacks!");
            lupita.attack(hana)
        });

    let hanaAttacksBtn = document
        .querySelector("#hana-attacks")
        .addEventListener("click", () => {
            console.log("Hana attacks!");
            hana.attack(lupita)
        });
});
