import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    ProductIndexComponent,
    ProductCrudComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    NbCardModule,
    NgSelectModule,
    Ng2SearchPipeModule
  ]
})
export class ProductModule { }
