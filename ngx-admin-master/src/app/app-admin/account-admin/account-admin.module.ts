import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountAdminIndexComponent } from './account-admin-index/account-admin-index.component';
import { AccountAdminCrudComponent } from './account-admin-crud/account-admin-crud.component';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    AccountAdminIndexComponent,
    AccountAdminCrudComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    ThemeModule,
    NgSelectModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class AccountAdminModule { }
