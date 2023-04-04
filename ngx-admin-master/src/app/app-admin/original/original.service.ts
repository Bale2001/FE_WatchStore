import { Injectable } from '@angular/core';
import { WatchStore, Original } from '../../@core/data/watch-store.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OriginalService {

  constructor(private _api: WatchStore) { }

  selectAll() :Observable<Original[]>{
    return this._api.originalsAll();
  }
  selectOne(id:number):Observable<Original>{
    return this._api.originalsGET(id);
  }
  insert(body: Original):Observable<Original>{
    return this._api.originalsPOST(body);
  }
  update(id: number, body: Original): Observable<void>{
    return this._api.originalsPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.originalsDELETE(id);
  }
}
