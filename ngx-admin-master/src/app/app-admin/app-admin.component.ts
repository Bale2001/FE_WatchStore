import { Component } from '@angular/core';

import { MENU_ITEMS } from './app-admin-menu';

@Component({
  selector: 'ngx-app-admin',
  styleUrls: ['./app-admin.component.scss'],
  templateUrl: './app-admin.component.html',
  
})
export class AppAdminComponent{
  menu = MENU_ITEMS;
}
