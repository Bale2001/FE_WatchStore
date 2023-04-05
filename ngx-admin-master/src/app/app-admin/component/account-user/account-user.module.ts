import { NgModule } from '@angular/core';
import { AccountUserIndexComponent } from './account-user-index/account-user-index.component';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AccountUserCrudComponent } from './account-user-crud/account-user-crud.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AccountUserRoutingModule } from './account-user-routing.module';



@NgModule({
  declarations: [
    AccountUserIndexComponent,
    AccountUserCrudComponent
  ],
  imports: [
    NbCardModule,
    ThemeModule,
    NgSelectModule,
    FormsModule,
    AccountUserRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class AccountUserModule { }
