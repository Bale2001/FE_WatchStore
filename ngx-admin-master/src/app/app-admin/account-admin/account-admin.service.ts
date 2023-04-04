import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin, WatchStore } from '../../@core/data/watch-store.service';

@Injectable({
  providedIn: 'root'
})
export class AccountAdminService {

  constructor(private _api: WatchStore) { }

  selectAll() :Observable<Admin[]>{
    return this._api.adminsAll();
  }
  selectOne(id:number):Observable<Admin>{
    return this._api.adminsGET(id);
  }
  insert(body: Admin):Observable<Admin>{
    return this._api.adminsPOST(body);
  }
  update(id: number, body: Admin): Observable<void>{
    return this._api.adminsPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.adminsDELETE(id);
  }
}
