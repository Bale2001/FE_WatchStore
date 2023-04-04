import { Component, Inject, OnInit } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { AccountAdminService } from '../account-admin.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../@core/customs/constants';
import { Admin } from '../../../@core/data/watch-store.service';

@Component({
  selector: 'ngx-account-admin-crud',
  templateUrl: './account-admin-crud.component.html',
  styleUrls: ['./account-admin-crud.component.scss']
})
export class AccountAdminCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private service: AccountAdminService,
    @Inject(MAT_DIALOG_DATA) public dataRef: { key: number; actionType: number },
    private dialogRef: MatDialogRef<AccountAdminCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  titlelabel = "tài khoản quản trị"

  ngOnInit(): void {
    if (this.dataRef.actionType !== this.statusAction.create) {
      this.loadData();
    }
  }

  ListStatus: object[] = [{ text: 'Sử dụng', value: true }, { text: 'Không sử dụng', value: false }];

  target: Admin = new Admin();

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
