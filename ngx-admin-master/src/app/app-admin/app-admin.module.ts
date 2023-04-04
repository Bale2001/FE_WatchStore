import { NgModule } from '@angular/core';
import { NbCardModule, NbMenuModule } from '@nebular/theme';
import { AppAdminComponent } from './app-admin.component';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule } from '../pages/forms/forms.module';
import { AppAdminRoutingModule } from './app-admin-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AccountAdminModule } from './account-admin/account-admin.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select';
import { AccountUserModule } from './account-user/account-user.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { FeedbackModule } from './feedback/feedback.module';
import { ImageModule } from './image/image.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { OriginalModule } from './original/original.module';
import { ProductModule } from './product/product.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [AppAdminComponent],
  imports: [
    NbMenuModule,
    ThemeModule,
    FormsModule,
    NbCardModule,
    Ng2SearchPipeModule,
    AccountAdminModule,
    AccountUserModule,
    CategoryModule,
    CommentModule,
    FeedbackModule,
    ImageModule,
    OrderModule,
    OrderDetailModule,
    OriginalModule,
    ProductModule,
    MatDialogModule,
    AppAdminRoutingModule,
    NgxSpinnerModule,
    NgSelectModule,
  ]
})
export class AppAdminModule { }
