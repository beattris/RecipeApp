import { Component } from '@angular/core';
// The import below is used to tell TS where the "Recipe []" type is coming from.
import { Recipe } from "../recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  // The "recipe" will now be linked to the Recipe model by this syntax.
  // recipes: Recipe[]. Recipe[] shows that the "recipe" will only  accept what is stored in the model.
  recipes: Recipe[] = [
    // "new Recipe()" is used to create a new object based on the Recipe model.
    new Recipe(
      'A test recipe',
      'This is a test recipe',
      'https://i1.pickpik.com/photos/1022/304/27/recipe-cooking-beef-meat-preview.jpg'
    ),
  ];
}
