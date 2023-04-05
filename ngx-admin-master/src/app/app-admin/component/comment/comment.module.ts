import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommentCrudComponent } from './comment-crud/comment-crud.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommentIndexComponent } from './comment-index/comment-index.component';



@NgModule({
  declarations: [
    CommentIndexComponent,
    CommentCrudComponent
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
export class CommentModule { }
