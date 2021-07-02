import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class ProductService
{
    products = [
        {id:1, title:'Controller', price: 10.00, fav:false, category: 'Electronics', quantity:0},
        {id:2, title:'Shovel', price: 30.50, fav:true, category:'Outdoors', quantity:0}
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