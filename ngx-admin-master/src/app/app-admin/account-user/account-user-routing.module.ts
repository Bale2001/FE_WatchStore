import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountUserIndexComponent } from './account-user-index/account-user-index.component';

export const routes: Routes = [
  { path: '', component: AccountUserIndexComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountUserRoutingModule { }
