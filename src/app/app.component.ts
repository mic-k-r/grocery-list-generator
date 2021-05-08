import { Component } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Easy Meal Planning';

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
}
