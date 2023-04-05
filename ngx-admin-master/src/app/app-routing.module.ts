import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app-client/app-client.module')
      .then(m => m.AppClientModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./app-admin/app-admin.module')
      .then(m => m.AppAdminModule)
  },
  {
    path: "**", redirectTo: ''
  }
  
  
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
