import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryIndexComponent } from './category-index/category-index.component';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CategoryCrudComponent } from './category-crud/category-crud.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    CategoryIndexComponent,
    CategoryCrudComponent
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
export class CategoryModule { }
