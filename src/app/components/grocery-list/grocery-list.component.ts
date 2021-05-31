import { Component, OnInit } from '@angular/core';
import { GroceryListService } from 'src/app/services/grocery-list.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  recipeList = this.groceryListService.getRecipeList();
  groceryListGenerated: boolean = false;

  constructor(private groceryListService: GroceryListService) { }

  ngOnInit() {
  }

  generateGroceryList() {
    this.groceryListGenerated = true;
    this.groceryListService.generateGroceryList(this.recipeList);
  }

}
