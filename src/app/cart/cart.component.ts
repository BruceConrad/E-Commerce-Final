import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent
{
  items = [] as any;
  totalPrice = 0;

  constructor(private cartServ:CartService)
  {

  }

  ngOnInit()
  {
    this.cartServ.getItems().subscribe((data) => {
      this.items = data;
      let total = 0;
      this.items.forEach(item => {
        total += item.price * item.quantity;
      })
      this.totalPrice = total;
    })
  }

  removeItem(item)
  {
    let totalRemoved = 0;
    this.items.forEach(i => {
      if(i.title === item.title)
      {
        totalRemoved += i.subTotal;
      }
    })
    this.totalPrice -= totalRemoved;
    this.cartServ.removeItem(item);

    console.log(this.items);
  }
}

