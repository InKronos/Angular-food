import { Component, OnInit } from '@angular/core';
import { FoodModel } from '../shared/models/Food.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../services/food/food';
import { Cart } from '../services/cart/cart';

@Component({
  selector: 'app-food-page',
  standalone: false,
  templateUrl: './food-page.html',
  styleUrl: './food-page.css'
})
export class FoodPage implements OnInit {
  food!:FoodModel;
  constructor(private foodService:Food, private activatedRoute:ActivatedRoute, private cartService:Cart, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        this.food = foodService.getFoodById(params.id)
    })
  }

  ngOnInit(): void {
    
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
