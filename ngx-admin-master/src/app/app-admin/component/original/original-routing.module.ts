import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OriginalIndexComponent } from './original-index/original-index.component';

export const routes: Routes = [
  { path: '', component: OriginalIndexComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OriginalRoutingModule { }
