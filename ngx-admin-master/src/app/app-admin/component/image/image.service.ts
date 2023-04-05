import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image, Product, WatchStore } from '../../../@core/data/watch-store.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _api: WatchStore) { }

  selectAll() :Observable<Image[]>{
    return this._api.imagesAll();
  }
  selectOne(id:number):Observable<Image>{
    return this._api.imagesGET(id);
  }
  insert(body: Image):Observable<Image>{
    return this._api.imagesPOST(body);
  }
  update(id: number, body: Image): Observable<void>{
    return this._api.imagesPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.imagesDELETE(id);
  }

  getAllSanPham() :Observable<Product[]>{
    return this._api.productsAll();
  }
}
