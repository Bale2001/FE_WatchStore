import { NgModule } from '@angular/core';
import { FeedbackIndexComponent } from './feedback-index/feedback-index.component';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FeedbackCrudComponent } from './feedback-crud/feedback-crud.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    FeedbackIndexComponent,
    FeedbackCrudComponent
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
export class FeedbackModule { }
