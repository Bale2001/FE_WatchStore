import { Injectable } from '@angular/core';
import { Feedback, User, WatchStore } from '../../../@core/data/watch-store.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private _api: WatchStore) { }

  selectAll() :Observable<Feedback[]>{
    return this._api.feedbacksAll();
  }
  selectOne(id:number):Observable<Feedback>{
    return this._api.feedbacksGET(id);
  }
  insert(body: Feedback):Observable<Feedback>{
    return this._api.feedbacksPOST(body);
  }
  update(id: number, body: Feedback): Observable<void>{
    return this._api.feedbacksPUT(id,body);
  }
  delete(id: number):Observable<void>{
    return this._api.feedbacksDELETE(id);
  }


  getAllKhachHang() :Observable<User[]>{
    return this._api.usersAll();
  }
}
