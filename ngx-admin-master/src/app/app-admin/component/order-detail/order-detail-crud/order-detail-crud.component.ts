import { Component, Inject, OnInit } from '@angular/core';
import { CommonService } from '../../../../common/common.service';
import { OrderDetailService } from '../order-detail.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderDetail } from '../../../../@core/data/watch-store.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../@core/customs/constants';

@Component({
  selector: 'ngx-order-detail-crud',
  templateUrl: './order-detail-crud.component.html',
  styleUrls: ['./order-detail-crud.component.scss']
})
export class OrderDetailCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private service: OrderDetailService,
    @Inject(MAT_DIALOG_DATA) public dataRef: { key: number; actionType: number },
    private dialogRef: MatDialogRef<OrderDetail>
  ) {  }

  statusAction = STATUS_ACTION;
  titlelabel = "chi tiết đơn hàng";

  listDonHang: any [] = [];
  listSanPham: any [] = [];


  ngOnInit(): void {
    if (this.dataRef.actionType !== this.statusAction.create) {
      this.loadData();
    }

    this.service.getAllDonHang().subscribe(res => {
      this.listDonHang = res;
    })
    this.service.getAllSanPham().subscribe(res => {
      this.listSanPham = res;
    })
  }

  target: OrderDetail = new OrderDetail();

  loadData(): void {
    this.service.selectOne(this.dataRef.key).subscribe((res) => {
      if (res) {
        this.target = res;
      } else {
        this.closeDialog(false);
      }
    });
  }

  save(): void {
    if (this.dataRef.actionType === STATUS_ACTION.create) {
      this.service.insert(this.target).subscribe((res) => {
        if(res === null) {
          this.closeDialog(true);
          this.commonService.toastrSuccess(SUCCESS_NOTICE);
        } else {
          this.commonService.toastrDanger("Thất bại!");
          this.closeDialog(false);
        }
      });
    } else {
      this.service.update(this.dataRef.key, this.target).subscribe((result) => {
        if (result===null) {
          this.commonService.toastrSuccess(SUCCESS_NOTICE);
          this.closeDialog(true);
        } else {
          this.commonService.toastrDanger("Thất bại!");
          this.closeDialog(false);
        }
      });
    }
  }

  closeDialog(value?: boolean): void {
    this.dialogRef.close(value);
  }
}
