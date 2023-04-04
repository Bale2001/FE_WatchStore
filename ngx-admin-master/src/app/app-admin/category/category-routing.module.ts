import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryIndexComponent } from './category-index/category-index.component';

export const routes: Routes = [
  { path: '', component: CategoryIndexComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
