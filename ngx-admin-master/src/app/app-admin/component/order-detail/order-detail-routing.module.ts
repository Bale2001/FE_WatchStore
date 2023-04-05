import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailIndexComponent } from './order-detail-index/order-detail-index.component';

export const routes: Routes = [
  { path: '', component: OrderDetailIndexComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderDetailRoutingModule { }
