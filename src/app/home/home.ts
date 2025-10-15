import { Component, OnInit } from '@angular/core';
import { Food } from '../services/food/food';
import { FoodModel } from '../shared/models/Food.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  foods:FoodModel[] = [];

  constructor(private foodService: Food, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.searchTerm){
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      }
      else if (params.tag)
          this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else{
        this.foods = this.foodService.getAll();
      }
    })
  }

}
