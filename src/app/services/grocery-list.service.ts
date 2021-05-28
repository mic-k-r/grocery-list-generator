import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {

  groceryList: Recipe[] = [];

  constructor() { }

  addToList(recipe: Recipe) {
    this.groceryList.push(recipe);
  }

  getGroceryList() {
    return this.groceryList;
  }

  clearList() {
    this.groceryList = [];
    return this.groceryList;
  }
}
