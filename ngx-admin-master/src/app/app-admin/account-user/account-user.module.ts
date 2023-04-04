import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountUserIndexComponent } from './account-user-index/account-user-index.component';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AccountUserCrudComponent } from './account-user-crud/account-user-crud.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AccountUserIndexComponent,
    AccountUserCrudComponent
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
export class AccountUserModule { }
