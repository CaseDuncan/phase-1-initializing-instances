// Write your code here
class Breakfast{
    constructor(drink, food){
        this.drink = drink;
        this.food = food;
    }
}



class Lunch{
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;

       
    }
}

class Dinner{
    #dessert; 
    constructor(salad, soup, entree, dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert =dessert;
    }
}
const breakfast = new Breakfast("eggs")