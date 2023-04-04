import { Injectable } from '@angular/core';
import { WatchStore, User } from '../../@core/data/watch-store.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountUserService {

  constructor(private _api: WatchStore) { }

  selectAll() :Observable<User[]>{
    return this._api.usersAll();
  }
  selectOne(id:number):Observable<User>{
    return this._api.usersGET(id);
  }
  insert(body: User):Observable<User>{
    return this._api.usersPOST(body);
  }
  update(id: number, body: User): Observable<void>{
    return this._api.usersPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.usersDELETE(id);
  }
}
