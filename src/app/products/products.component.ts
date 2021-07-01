import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent
{
  products = [] as any;

  constructor(private prodServ:ProductService)
  {
    
  }

  ngOnInit()
  {
    this.products = this.prodServ.getProducts();
  }

  filter(e:any)
  {
    this.products = this.prodServ.filter(e.target.value);
  }

  setFav(item:any)
  {
    this.prodServ.toggleFavorite(item);
  }

  addToCart(item:any)
  {
    
  }
}
