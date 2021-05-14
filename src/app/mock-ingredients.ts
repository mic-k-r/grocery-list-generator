import { Ingredient } from './interfaces/ingredient';

//what am I going to do about quantities? and how can I make them dynamic?
//initialize the quantity to zero and then update it later somehow with a function?
export const INGREDIENTS: Ingredient[] = [
    { name: "red snapper", quantity: 0, unit: "lb" },
    { name: "onion", quantity: 0, unit: "unit" },
    { name: "green beans", quantity: 0, unit: "lb" },
    { name: "parsley", quantity: 0, unit: "bunch" },
    { name: "potato", quantity: 0, unit: "lb" },
    { name: "raw shrimp", quantity: 0,unit: "lb"},
    { name: "lemon", quantity: 0, unit: "unit" },
    { name: "salt", quantity: 0, unit: "teaspoon" },
    { name: "black pepper", quantity: 0, unit: "teaspoon"}
];