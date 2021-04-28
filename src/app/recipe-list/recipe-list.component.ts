import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recipes: Array<String> = ["Red Snapper with Italian Salsa Verde", "Shrimp Scampi", "Punjabi Aloo Beans", "Homemade Breakfast Hummus", "Sourdough Bread", "Whole Wheat Rotis"]

}
