import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountAdminCrudComponent } from '../account-admin-crud/account-admin-crud.component';
import { CommonService } from '../../../common/common.service';
import { AccountAdminService } from '../account-admin.service';
import { STATUS_ACTION } from '../../../@core/customs/constants';
import { DialogConfirmComponent } from '../../../@theme/components/template/dialog/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'ngx-account-admin-index',
  templateUrl: './account-admin-index.component.html',
  styleUrls: ['./account-admin-index.component.scss']
})
export class AccountAdminIndexComponent implements OnInit {

  target: any [] = [];

  constructor(
    private _dialog: MatDialog,
    private _commonservice: CommonService,
    private _service: AccountAdminService,
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
    this._dialog.open(AccountAdminCrudComponent, 
      this._commonservice.configDialog("50%", { key: null, actionType: STATUS_ACTION.create })).afterClosed().subscribe(res => {
        if(res){
          this.loadData();
        }
      })
  }

  openDetailDialog(key: string) {
    this._dialog.open(AccountAdminCrudComponent,
      this._commonservice.configDialog('70%', { key: key, actionType: STATUS_ACTION.detail })).afterClosed().subscribe(() => { });
  }

  openEditDialog(key: string) {
    this._dialog.open(AccountAdminCrudComponent,
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
        message: `Bạn có chắc chắn xóa tài khoản <b>${title}</b> ?`,
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
