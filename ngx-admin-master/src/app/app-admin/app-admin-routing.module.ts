import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAdminComponent } from './app-admin.component';
import { routes as ComponentRoutes } from './component/component-routing.module';

export const routes: Routes = [
  {
    path: '',
    component: AppAdminComponent,
    children: [
      {  path: '', children: ComponentRoutes },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }
