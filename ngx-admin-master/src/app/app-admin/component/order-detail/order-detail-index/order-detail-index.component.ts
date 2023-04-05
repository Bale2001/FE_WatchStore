import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../../../../common/common.service';
import { OrderDetailService } from '../order-detail.service';
import { OrderDetailCrudComponent } from '../order-detail-crud/order-detail-crud.component';
import { DialogConfirmComponent } from '../../../../@theme/components/template/dialog/dialog-confirm/dialog-confirm.component';
import { STATUS_ACTION } from '../../../../@core/customs/constants';

@Component({
  selector: 'ngx-order-detail-index',
  templateUrl: './order-detail-index.component.html',
  styleUrls: ['./order-detail-index.component.scss']
})
export class OrderDetailIndexComponent implements OnInit {

  p: any;

  term = '';
  target: any [] = [];


  constructor(
    private _dialog: MatDialog,
    private _commonservice: CommonService,
    private _service: OrderDetailService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._service.selectAll().subscribe(res => {
      if(res){
        this.target = res;
      }
    })
  }

  openCreateDialog(){
    this._dialog.open(OrderDetailCrudComponent, 
      this._commonservice.configDialog("50%", { key: null, actionType: STATUS_ACTION.create })).afterClosed().subscribe(res => {
        if(res){
          this.loadData();
        }
      })
  }

  openDetailDialog(key: string) {
    this._dialog.open(OrderDetailCrudComponent,
      this._commonservice.configDialog('70%', { key: key, actionType: STATUS_ACTION.detail })).afterClosed().subscribe(() => { });
  }

  openEditDialog(key: string) {
    this._dialog.open(OrderDetailCrudComponent,
      this._commonservice.configDialog('70%', { key: key, actionType: STATUS_ACTION.edit })).afterClosed().subscribe(res => {
        if (res) {
          this.loadData();
        }
      });
  }

  openDeleteDialog(key: number, title?: string) {
    this._dialog.open(DialogConfirmComponent,
      this._commonservice.configDialog('30%', {
        title: 'Xác nhận',
        message: `Bạn có chắc chắn xóa chi tiết đơn hàng <b>${title}</b> ?`,
        color: 'text-warning',
        type: 1,
        icon: 'exclamation-triangle',
        isAppend: true
      }))
      .afterClosed().subscribe((dialog) => {
        if (dialog) {
          this._commonservice.toastrSuccess();
          this._service.delete(key).subscribe(res => {
            this.loadData();
          });
        }
        else{
          this._commonservice.toastrDanger("Xóa thất bại!");
        }
      });
  }

}
