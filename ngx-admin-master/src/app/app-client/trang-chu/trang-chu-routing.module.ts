import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TrangChuComponent } from './trang-chu.component';

export const routes: Routes = [
  { path: '', component: TrangChuComponent}
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class TrangChuRoutingModule { }
