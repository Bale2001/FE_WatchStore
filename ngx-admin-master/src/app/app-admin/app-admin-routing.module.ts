import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAdminComponent } from './app-admin.component';
import { routes as AccountAdminRoutes } from './account-admin/account-admin-routing.module';
import { routes as AccountUserRoutes } from './account-user/account-user-routing.module';
import { routes as OriginalRoutes } from './original/original-routing.module';
import { routes as ProDuctRoutes } from './product/product-routing.module';
import { routes as CategoryRoutes } from './category/category-routing.module';
import { routes as ImageRoutes } from './image/image-routing.module';
import { routes as OrderRoutes } from './order/order-routing.module';
import { routes as OrderDeatailRoutes } from './order-detail/order-detail-routing.module';
import { routes as FeedBackRoutes } from './feedback/feedback-routing.module';
import { routes as CommentRoutes } from './comment/comment-routing.module';

const routes: Routes = [
  {
    path: '',
    component: AppAdminComponent,
    children: [
      {  path: 'account-admin', children: AccountAdminRoutes },
      {  path: 'account-user', children: AccountUserRoutes},
      {  path: 'original', children: OriginalRoutes},
      {  path: 'product', children: ProDuctRoutes},
      {  path: 'category', children: CategoryRoutes},
      {  path: 'image', children: ImageRoutes},
      {  path: 'order', children: OrderRoutes},
      {  path: 'order-detail', children: OrderDeatailRoutes},
      {  path: 'feedback', children: FeedBackRoutes},
      {  path: 'comment', children: CommentRoutes},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }
