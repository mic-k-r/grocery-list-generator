export class Ingredient {
    nextId: number = 1;
    id: number;
    name: string;
    quantity: number;
    unit: string;

    constructor(name: string, quantity: number, unit: string) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.id = this.nextId;
        this.nextId++;
    }
}
