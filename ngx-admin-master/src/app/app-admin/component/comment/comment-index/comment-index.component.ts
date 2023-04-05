import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../../../../common/common.service';
import { CommentService } from '../comment.service';
import { CommentCrudComponent } from '../comment-crud/comment-crud.component';
import { DialogConfirmComponent } from '../../../../@theme/components/template/dialog/dialog-confirm/dialog-confirm.component';
import { STATUS_ACTION } from '../../../../@core/customs/constants';

@Component({
  selector: 'ngx-comment-index',
  templateUrl: './comment-index.component.html',
  styleUrls: ['./comment-index.component.scss']
})
export class CommentIndexComponent implements OnInit {

  term: any;
  p: any;
  target: any [] = [];

  constructor(
    private _dialog: MatDialog,
    private _commonservice: CommonService,
    private _service: CommentService,
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
    this._dialog.open(CommentCrudComponent, 
      this._commonservice.configDialog("50%", { key: null, actionType: STATUS_ACTION.create })).afterClosed().subscribe(res => {
        if(res){
          this.loadData();
        }
      })
  }

  openDetailDialog(key: string) {
    this._dialog.open(CommentCrudComponent,
      this._commonservice.configDialog('70%', { key: key, actionType: STATUS_ACTION.detail })).afterClosed().subscribe(() => { });
  }

  openEditDialog(key: string) {
    this._dialog.open(CommentCrudComponent,
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
        message: `Bạn có chắc chắn xóa bình luận của <b>${title}</b> ?`,
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
