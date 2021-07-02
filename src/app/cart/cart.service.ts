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
        this.temp.push(item);
        this.items.next(this.temp);
    }

    getItems()
    {
        return this.items;
    }
}