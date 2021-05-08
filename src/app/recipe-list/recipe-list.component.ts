import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList: Recipe[]; 

  constructor() { 
      this.recipeList = [
        new Recipe("Red Snapper with Italian Salsa Verde", 
                  "1 lb red snapper, 2 onions, 1 bunch parsley", 
                  "1. Cook red snapper in a cast iron pan, 2. Add the salsa verde."), 
        new Recipe("Punjabi Aloo Beans",
                  "1 lb French green beans, 3 lbs potatoes",
                  "Put everything in an Instant Pot and pressure cook it."),
        new Recipe("Shrimp Scampi",
                  "1 lb raw shrimp, 1 lb linguini, 1 bunch parsley, 4 lemons",
                  "1. Sautee shrimp")
      ];
   }

  ngOnInit() {
  }

}
