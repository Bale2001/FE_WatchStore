import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppClientRoutingModule } from './app-client-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { RouterModule } from '@angular/router';
import { AppClientComponent } from './app-client.component';




@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    AppClientRoutingModule,
  ],
  declarations: [AppClientComponent]
})
export class AppClientModule { }
