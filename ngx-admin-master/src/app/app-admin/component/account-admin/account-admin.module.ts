import { NgModule } from '@angular/core';
import { AccountAdminIndexComponent } from './account-admin-index/account-admin-index.component';
import { AccountAdminCrudComponent } from './account-admin-crud/account-admin-crud.component';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AccountAdminRoutingModule } from './account-admin-routing.module';


@NgModule({
  declarations: [
    AccountAdminIndexComponent,
    AccountAdminCrudComponent
  ],
  imports: [
    NbCardModule,
    ThemeModule,
    NgSelectModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AccountAdminRoutingModule
  ]
})
export class AccountAdminModule { }
