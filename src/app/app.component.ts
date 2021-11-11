import { leadingComment } from '@angular/compiler';
import { Component } from '@angular/core';

import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu';

  menuItems: MenuItem[] = [
    { name: "Small Pizza", category: "Pizzas", price: 8.99 },
    { name: "Medium Pizza", category: "Pizzas", price: 11.99 },
    { name: "Large Pizza", category: "Pizzas", price: 14.99},
    { name: "Deep Dish Pizza", category: "Pizzas", price: 12.99},
    { name: "House Salad", category: "Salads", price: 3.99 },
    { name: "Caeser Salad", category: "Salads", price: 3.99 },
    { name: "Mozz. Sticks", category: "Appetizers", price: 7.99 },
    { name: "Onion Rings", category: "Appetizers", price: 7.99 },
    { name: "Buffalo Wings", category: "Appetizers", price: 7.99 },
    { name: "Cuban Sandwich", category: "Handhelds", price: 8.99 },
    { name: "Cheese Steak Sandwich", category: "Handhelds", price: 8.99},   
  ];

  cart: MenuItem[] = [];
    AddToCart(item: MenuItem):void{
      this.cart.push(item);
    }
  
  totalPrice(cart: MenuItem[]): number{
    let total = 0;
    for (let i: number = 0; i < cart.length; i++){
      total += cart[i].price;
    }
    //tax
    total *= 1.06;
    return total;
  }
}
