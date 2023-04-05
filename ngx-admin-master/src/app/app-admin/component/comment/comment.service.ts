import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WatchStore, Comment, User, Product } from '../../../@core/data/watch-store.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _api: WatchStore) { }

  selectAll() :Observable<Comment[]>{
    return this._api.commentsAll();
  }
  selectOne(id:number):Observable<Comment>{
    return this._api.commentsGET(id);
  }
  insert(body: Comment):Observable<Comment>{
    return this._api.commentsPOST(body);
  }
  update(id: number, body: Comment): Observable<void>{
    return this._api.commentsPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.commentsDELETE(id);
  }

  getAllKhachHang() :Observable<User[]>{
    return this._api.usersAll();
  }
  getAllSanPham() :Observable<Product[]>{
    return this._api.productsAll();
  }
}
