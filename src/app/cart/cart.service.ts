import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class CartService
{
    items = new Subject();
    temp = [] as any;

    add(item:any)
    {
        if(!this.temp.find(i => i.id === item.id))
        {
            item.quantity = 1;
            this.temp.push(item);
            this.items.next(this.temp);
        }
        else
        {
            if(this.temp.find(i => i.id === item.id))
            {
                item.quantity++;
            }

        }
    }

    getItems()
    {
        return this.items;
    }

    removeItem(item:any)
    {
        let index = this.temp.indexOf(item.id);
        let itemRemoved = this.temp.splice(index,1);
        this.items.next(this.temp.filter(i => i.id !== itemRemoved.id));
    }
}