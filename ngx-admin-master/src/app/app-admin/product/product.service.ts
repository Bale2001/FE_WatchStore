import { Injectable } from '@angular/core';
import { Original, Product, WatchStore, GetAllOriginal, GetAllCategory, Category } from '../../@core/data/watch-store.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _api: WatchStore) { }

  selectAll() :Observable<Product[]>{
    return this._api.productsAll();
  }
  selectOne(id:number):Observable<Product>{
    return this._api.productsGET(id);
  }
  insert(body: Product):Observable<Product>{
    return this._api.productsPOST(body);
  }
  update(id: number, body: Product): Observable<void>{
    return this._api.productsPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.productsDELETE(id);
  }
  
//Bảng khác
  selectAllOriginal() :Observable<Original[]>{
    return this._api.originalsAll();
  }
  selectAllCategory() :Observable<Category[]>{
    return this._api.categoriesAll();
  }
}
