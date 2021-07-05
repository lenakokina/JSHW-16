
class Hamburger {
    constructor(options) {
        this.price = options.price;
        this.calories = options.calories;
       }
     

       static SIZE_SMALL = {
        price: 50,
        calories: 20,
       };

       static SIZE_MIDDLE = {
        price: 75,
        calories: 30,
       };

       static SIZE_BIG = {
         price: 100,
        calories: 40,
       };

       static TOPPING_MAYO = {
        price: 20,
        calories: 5,
       };

       static TOPPING_SPICE = {
        price: 15,
        calories: 0,
       };

       static TOPPING_CHEESE = {
        price: 10,
        calories: 20,
       };

       static TOPPING_SALAD = {
        price: 20,
        calories: 5,
       };

      static TOPPING_POTATO = {
        price: 15,
        calories: 10,
      };

      getPrice() {
        return this.price;
      }

      getCalories() {
        return this.calories;
      }

      addTopping(topping) {
         return this.price += topping.price
                this.calories += topping.calories;
      }

    }


    

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// const hamburger = new Hamburger(Hamburger.SIZE_MIDDLE);
// const hamburger = new Hamburger(Hamburger.SIZE_BIG);

// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// hamburger.addTopping(Hamburger.TOPPING_POTATO);
// hamburger.addTopping(Hamburger.TOPPING_SPICE);
// hamburger.addTopping(Hamburger.TOPPING_SALAD);
hamburger.addTopping(Hamburger.TOPPING_CHEESE);

console.log('Price with sauce: ' + hamburger.getPrice());

console.log('Calories with sauce: ' + hamburger.getCalories());




