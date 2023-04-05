import { Component, Inject, OnInit } from '@angular/core';
import { CommonService, ConvertDatePipe } from '../../../../common/common.service';
import { FeedbackService } from '../feedback.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../@core/customs/constants';
import { Feedback } from '../../../../@core/data/watch-store.service';

@Component({
  selector: 'ngx-feedback-crud',
  templateUrl: './feedback-crud.component.html',
  styleUrls: ['./feedback-crud.component.scss']
})
export class FeedbackCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private service: FeedbackService,
    @Inject(MAT_DIALOG_DATA) public dataRef: { key: number; actionType: number },
    private dialogRef: MatDialogRef<FeedbackCrudComponent>
  ) { }
  
  statusAction = STATUS_ACTION;
  titlelabel = "phản hồi từ khách hàng";
  listNguoiDung: any [] = [];

  ngOnInit(): void {
    if (this.dataRef.actionType !== this.statusAction.create) {
      this.loadData();
    }
    this.service.getAllKhachHang().subscribe(res => {
      this.listNguoiDung = res;
      console.log(this.listNguoiDung)
    })
  }

  ListStatus: object[] = [{ text: 'Đã xem', value: "1" }, { text: 'Chưa xem', value: "2" }];

  target: Feedback = new Feedback();

  loadData(): void {
    this.service.selectOne(this.dataRef.key).subscribe((res) => {
      if (res) {
        this.target = res;
        this.target.febDate = this.target.febDate ? new ConvertDatePipe().transform(this.target.febDate) : null;
      } else {
        this.closeDialog(false);
      }
    });
  }

  save(): void {
    this.target.febDate = this.target.febDate ? new Date(this.target.febDate) : null;
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
