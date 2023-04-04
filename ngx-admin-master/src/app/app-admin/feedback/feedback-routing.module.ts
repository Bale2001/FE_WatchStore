import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackIndexComponent } from './feedback-index/feedback-index.component';

export const routes: Routes = [
  { path: '', component: FeedbackIndexComponent }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
