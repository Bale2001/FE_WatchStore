import { Component, Inject, OnInit } from '@angular/core';
import { AccountUserService } from '../account-user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../@core/customs/constants';
import { User } from '../../../@core/data/watch-store.service';
import { ConvertDatePipe } from '../../../@core/customs/common.service';
import { CommonService } from '../../../common/common.service';

@Component({
  selector: 'ngx-account-user-crud',
  templateUrl: './account-user-crud.component.html',
  styleUrls: ['./account-user-crud.component.scss']
})
export class AccountUserCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private service: AccountUserService,
    @Inject(MAT_DIALOG_DATA) public dataRef: { key: number; actionType: number },
    private dialogRef: MatDialogRef<AccountUserCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  titlelabel = "tài khoản người dùng";

  ListStatus: object[] = [{ text: 'Sử dụng', value: true }, { text: 'Không sử dụng', value: false }];

  target: User = new User();


  ngOnInit(): void {
    if (this.dataRef.actionType !== this.statusAction.create) {
      this.loadData();
    }
  }
  
  loadData(): void {
    this.service.selectOne(this.dataRef.key).subscribe((res) => {
      if (res) {
        this.target = res;
        this.target.birthday = this.target.birthday ? new ConvertDatePipe().transform(this.target.birthday) : null;
      } else {
        this.closeDialog(false);
      }
    });
  }

  save(): void {
    this.target.birthday = this.target.birthday ? new Date(this.target.birthday) : null;
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
    } 
    else {
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
