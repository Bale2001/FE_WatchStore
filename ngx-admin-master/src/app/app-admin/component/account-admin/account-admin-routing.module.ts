import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountAdminIndexComponent } from './account-admin-index/account-admin-index.component';

export const routes: Routes = [
  {path: '', component: AccountAdminIndexComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountAdminRoutingModule { }
