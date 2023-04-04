import { Component, Inject, OnInit } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OriginalService } from '../original.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../@core/customs/constants';
import { Original } from '../../../@core/data/watch-store.service';

@Component({
  selector: 'ngx-original-crud',
  templateUrl: './original-crud.component.html',
  styleUrls: ['./original-crud.component.scss']
})
export class OriginalCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private service: OriginalService,
    @Inject(MAT_DIALOG_DATA) public dataRef: { key: number; actionType: number },
    private dialogRef: MatDialogRef<OriginalCrudComponent>
  ) {  }

  statusAction = STATUS_ACTION;
  titlelabel = "tài khoản quản trị"

  ngOnInit(): void {
    if (this.dataRef.actionType !== this.statusAction.create) {
      this.loadData();
    }
  }

  target: Original = new Original();

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
