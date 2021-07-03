import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class ProductService
{
    products = [
        {id:1, title:'Controller', price: 10.00, fav:false, category: 'Electronics', quantity:0},
        {id:2, title:'Shovel', price: 30.50, fav:true, category:'Outdoors', quantity:0},
        {id:3, title:'Batteries', price: 5.00, fav:false, category:'Electronics', quantity:0},
        {id:4, title:'Firewood', price: 20.00, fav:false, category:'Home', quantity:0},
        {id:5, title:'Cologne', price: 80.00, fav:true, category:'Mens', quantity:0},
        {id:6, title:'Deodorant', price: 15.00, fav:false, category:'Mens', quantity:0},
    ];

    getProducts()
    {
        return this.products;
    }

    filter(category:string)
    {
        return this.products.filter(items => items.category === category);
    }

    toggleFavorite(id:number)
    {
        this.products.forEach(item => {
            if(item.id === id)
            {
                item.fav = !item.fav;
            }
        })
    }
}