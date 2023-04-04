import { Injectable } from '@angular/core';
import { WatchStore, Category } from '../../@core/data/watch-store.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _api: WatchStore) { }

  selectAll() :Observable<Category[]>{
    return this._api.categoriesAll();
  }
  selectOne(id:number):Observable<Category>{
    return this._api.categoriesGET(id);
  }
  insert(body: Category):Observable<Category>{
    return this._api.categoriesPOST(body);
  }
  update(id: number, body: Category): Observable<void>{
    return this._api.categoriesPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.categoriesDELETE(id);
  }
}
