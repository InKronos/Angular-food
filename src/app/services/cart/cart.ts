import { Injectable } from '@angular/core';
import { FoodModel } from '../../shared/models/Food.model';
import { cartModel } from '../../shared/models/Cart.model';
import { CartItemModel } from '../../shared/models/CartItem.model';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  private cart:cartModel = new cartModel();

  addToCart(food:FoodModel):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItemModel(food));
  }

  removeFromCart(foodId:number): void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():cartModel{
    return this.cart;
  }
}
