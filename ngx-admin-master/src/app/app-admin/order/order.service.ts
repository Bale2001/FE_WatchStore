import { Injectable } from '@angular/core';
import { Order, User, WatchStore } from '../../@core/data/watch-store.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _api: WatchStore) { }

  selectAll() :Observable<Order[]>{
    return this._api.ordersAll();
  }
  selectOne(id:number):Observable<Order>{
    return this._api.ordersGET(id);
  }
  insert(body: Order):Observable<Order>{
    return this._api.ordersPOST(body);
  }
  update(id: number, body: Order): Observable<void>{
    return this._api.ordersPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.ordersDELETE(id);
  }

  getAllUser():Observable<User[]>{
    return this._api.usersAll();
  }
}
