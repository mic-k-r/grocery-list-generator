import { Component, OnInit } from '@angular/core';
import { GroceryListService } from 'src/app/services/grocery-list.service';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  recipeList: Recipe[] = [];
  groceryListGenerated: boolean = false;

  constructor(private groceryListService: GroceryListService) { }

  ngOnInit() {
    this.recipeList = this.groceryListService.getRecipeList()
  }

  generateGroceryList(recipeList) {
    this.groceryListGenerated = true;
    this.groceryListService.generateGroceryList(recipeList);
  }

}
