import { NgModule } from '@angular/core';
import { OrderDetailIndexComponent } from './order-detail-index/order-detail-index.component';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { OrderDetailCrudComponent } from './order-detail-crud/order-detail-crud.component';



@NgModule({
  declarations: [
    OrderDetailIndexComponent,
    OrderDetailCrudComponent
  ],
  imports: [
    NbCardModule,
    ThemeModule,
    NgSelectModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class OrderDetailModule { }
