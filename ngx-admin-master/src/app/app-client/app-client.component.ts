import { Component } from '@angular/core';

@Component({
    selector: 'ngx-app-admin',
    template:
    `
        <ngx-three-columns-layout>
            <router-outlet>
            </router-outlet>
        </ngx-three-columns-layout>
    `
  
})
export class AppClientComponent{

}
