import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { CuaHangComponent } from './cua-hang/cua-hang.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { AppClientComponent } from './app-client.component';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';
import { BaiVietComponent } from './bai-viet/bai-viet.component';
import { ChiTietBaiVietComponent } from './chi-tiet-bai-viet/chi-tiet-bai-viet.component';

export const routes: Routes = [
  { path: '', component: AppClientComponent, children: [
    { path: '', component: TrangChuComponent},
    { path: 'cuahang', component: CuaHangComponent},
    { path: 'gioithieu', component: GioiThieuComponent},
    { path: 'chitietsanpham', component: ChiTietSanPhamComponent},
    { path: 'baiviet', component: BaiVietComponent},
    { path: 'chitietbaiviet', component: ChiTietBaiVietComponent},

  ]}
  // { path: 'cuahang', component: CuaHangComponent },
  // { path: 'gioithieu', component: GioiThieuComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppClientRoutingModule { }
