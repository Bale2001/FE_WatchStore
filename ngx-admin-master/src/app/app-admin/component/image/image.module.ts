import { NgModule } from '@angular/core';
import { ImageIndexComponent } from './image-index/image-index.component';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ImageCrudComponent } from './image-crud/image-crud.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ImageIndexComponent,
    ImageCrudComponent
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
export class ImageModule { }
