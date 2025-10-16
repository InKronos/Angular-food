import { CartItemModel } from "./CartItem.model"

export class cartModel {
    items:CartItemModel[] = [];

    get totalPrice(): number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price;
        })
        return totalPrice;
    }
}