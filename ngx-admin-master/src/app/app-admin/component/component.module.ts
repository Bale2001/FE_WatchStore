import { NgModule } from '@angular/core';
import { NbCardModule, NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AccountAdminModule } from './account-admin/account-admin.module';
import { AccountUserModule } from './account-user/account-user.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { FeedbackModule } from './feedback/feedback.module';
import { ImageModule } from './image/image.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { OriginalModule } from './original/original.module';
import { ProductModule } from './product/product.module';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComponentRoutingModule } from './component-routing.module';
import { InfochartComponent } from './infochart/infochart.component';

@NgModule({
  declarations: [InfochartComponent],
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
    NgxSpinnerModule,
    NgSelectModule,
    ComponentRoutingModule
  ]
})
export class ComponentModule { }
