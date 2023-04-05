import { NgModule } from '@angular/core';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    ProductIndexComponent,
    ProductCrudComponent,
  ],
  imports: [
    ThemeModule,
    FormsModule,
    NbCardModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class ProductModule { }
