import { Component, Inject, OnInit } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { OrderService } from '../order.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order } from '../../../@core/data/watch-store.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../@core/customs/constants';

@Component({
  selector: 'ngx-order-crud',
  templateUrl: './order-crud.component.html',
  styleUrls: ['./order-crud.component.scss']
})
export class OrderCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private service: OrderService,
    @Inject(MAT_DIALOG_DATA) public dataRef: { key: number; actionType: number },
    private dialogRef: MatDialogRef<Order>
  ) {  }

  statusAction = STATUS_ACTION;
  titlelabel = "đơn hàng";

  listStatus: any [] = [{text: "Chưa xử lý", value: 1},{text: "Đã xử lý", value: 2}];
  listUser:any [] = [];

  ngOnInit(): void {
    if (this.dataRef.actionType !== this.statusAction.create) {
      this.loadData();
    }
    this.service.getAllUser().subscribe(res => {
      console.log(res);
    })
  }

  target: Order = new Order();

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
