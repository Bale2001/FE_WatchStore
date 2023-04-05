import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderIndexComponent } from './order-index/order-index.component';

export const routes: Routes = [
  { path: '', component: OrderIndexComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
