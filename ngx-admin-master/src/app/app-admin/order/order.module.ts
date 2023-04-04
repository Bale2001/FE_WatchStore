import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderIndexComponent } from './order-index/order-index.component';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderCrudComponent } from './order-crud/order-crud.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    OrderIndexComponent,
    OrderCrudComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    ThemeModule,
    NgSelectModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class OrderModule { }
