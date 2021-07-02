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
      for(let i = 0; i < this.items.length; i++)
      {
        for(let j = 0; j < this.items[i].quantity; j++)
        {
          total += this.items[i].price;
        }
      }
      this.totalPrice = total;
    })
  }
}

