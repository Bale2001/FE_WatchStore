import { Injectable } from '@angular/core';
import { Order, OrderDetail, Product, WatchStore } from '../../../@core/data/watch-store.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private _api: WatchStore) { }

  selectAll() :Observable<OrderDetail[]>{
    return this._api.orderDetailsAll();
  }
  selectOne(id:number):Observable<OrderDetail>{
    return this._api.orderDetailsGET(id);
  }
  insert(body: OrderDetail):Observable<OrderDetail>{
    return this._api.orderDetailsPOST(body);
  }
  update(id: number, body: OrderDetail): Observable<void>{
    return this._api.orderDetailsPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.orderDetailsDELETE(id);
  }

  getAllDonHang() :Observable<Order[]>{
    return this._api.ordersAll();
  }
  getAllSanPham() :Observable<Product[]>{
    return this._api.productsAll();
  }
}
