import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppClientComponent } from './app-client.component';
import { AppClientRoutingModule } from './app-client-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AppClientComponent],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    AppClientRoutingModule
  ]
})
export class AppClientModule { }
