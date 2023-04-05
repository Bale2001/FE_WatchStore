import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageIndexComponent } from './image-index/image-index.component';

export const routes: Routes = [
  { path: '', component: ImageIndexComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageRoutingModule { }
