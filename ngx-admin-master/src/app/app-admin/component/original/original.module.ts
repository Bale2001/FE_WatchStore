import { NgModule } from '@angular/core';
import { OriginalIndexComponent } from './original-index/original-index.component';
import { OriginalCrudComponent } from './original-crud/original-crud.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    OriginalIndexComponent,
    OriginalCrudComponent
  ],
  imports: [
    ThemeModule,
    NbCardModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class OriginalModule { }
