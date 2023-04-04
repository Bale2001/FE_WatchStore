import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NbMenuItem } from '@nebular/theme';
import { MenuVm, MenuVmIListApiResponse, QldtApiService } from '../data/qldt.service';

@Injectable({
  providedIn: "root",
})
export class MenuService {
  private menuItemsChangedCallback: BehaviorSubject<NbMenuItem[]>;
  private routingChangedCallback: BehaviorSubject<MenuVm[]>;
  constructor(
    private _service: QldtApiService // private logger: LoggerService
  ) {
    this.menuItemsChangedCallback = new BehaviorSubject<NbMenuItem[]>([]);
    this.routingChangedCallback = new BehaviorSubject<MenuVm[]>([]);
  }

  getNbMenuItem(): Observable<NbMenuItem[]> {
    return this.menuItemsChangedCallback;
  }

  setNbMenuItem(lstMenu: NbMenuItem[]) {
    this.menuItemsChangedCallback.next(lstMenu);
  }

  getRoutingSaveCheckRole(): BehaviorSubject<MenuVm[]> {
    return this.routingChangedCallback;
  }

  setRoutingSaveCheckRole(lst: MenuVm[]) {
    this.routingChangedCallback.next(lst);
  }

  getMenuByUserLogin(): Observable<MenuVmIListApiResponse> {
    return this._service.qldtApiV1SysMenuGetSelectData();
  }

  resetMenuWhenLogin() {
    this.menuItemsChangedCallback = new BehaviorSubject<NbMenuItem[]>([]);
  }
}
