import { NgModule } from '@angular/core';
import { AppAdminComponent } from './app-admin.component';
import { CommonModule } from '@angular/common';
import { AppAdminRoutingModule } from './app-admin-routing.module';
import { ComponentModule } from './component/component.module';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppAdminComponent],
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    ComponentModule,
    ThemeModule,
    NbMenuModule,
    FormsModule
  ]
})
export class AppAdminModule { }
