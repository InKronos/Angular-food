import { Component, OnInit } from '@angular/core';
import { Cart } from '../services/cart/cart';
import { cartModel } from '../shared/models/Cart.model';
import { CartItemModel } from '../shared/models/CartItem.model';
import { Food } from '../services/food/food';

@Component({
  selector: 'app-cart-page',
  standalone: false,
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage implements OnInit{
  cart!:cartModel;
  constructor(private cartService: Cart){
    
    this.setCart();
  }
  ngOnInit(): void {
    
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItemModel){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItemModel, quantityInString:string){
    const quantity = parseInt(quantityInString);

    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
  
 
}
