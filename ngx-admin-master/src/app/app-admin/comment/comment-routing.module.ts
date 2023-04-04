import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentIndexComponent } from './comment-index/comment-index.component';

export const routes: Routes = [
  { path: '', component: CommentIndexComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
