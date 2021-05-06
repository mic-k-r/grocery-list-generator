// import { Ingredient } from './ingredient';

export class Recipe {
    nextId: number = 1;
    id: number;
    name: string;
    // ingredients: Ingredient[];
    ingredients: string;
    instructions: string;

    constructor(name: string, ingredients: string, instructions: string) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.id = this.nextId;
        this.nextId++;
    }
}
