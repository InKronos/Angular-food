import { Injectable } from '@angular/core';
import { FoodModel } from '../../shared/models/Food.model';
import { TagModel } from '../../shared/models/Tag.model';

@Injectable({
  providedIn: 'root'
})
export class Food {


  getAllTags():TagModel[]{ 
     return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Salad', count: 1 },
    ]; 
  }

  getFoodById(id: number): FoodModel{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm: string) : FoodModel[]{
    return  this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllFoodsByTag(tag:string): FoodModel[]{
    return tag == "All" ? 
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAll():FoodModel[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'images/pizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'hotdog',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['us', 'france'],
        stars: 5,
        imageUrl: 'images/hotdog.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'images/burger.jpeg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 2.5,
        imageUrl: 'images/fries.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Salad',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy', 'poland'],
        stars: 3.0,
        imageUrl: 'images/salad.jpeg',
        tags: ['Salad', 'SlowFood', 'Lunch'], 
      },
      
    ]
  }
}
