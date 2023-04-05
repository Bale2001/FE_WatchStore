import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../../../../common/common.service';
import { ImageService } from '../image.service';
import { ImageCrudComponent } from '../image-crud/image-crud.component';
import { STATUS_ACTION } from '../../../../@core/customs/constants';
import { DialogConfirmComponent } from '../../../../@theme/components/template/dialog/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'ngx-image-index',
  templateUrl: './image-index.component.html',
  styleUrls: ['./image-index.component.scss']
})
export class ImageIndexComponent implements OnInit {

  p: any;
  term: any;
  target: any [] = [];

  constructor(
    private _dialog: MatDialog,
    private _commonservice: CommonService,
    private _service: ImageService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._service.selectAll().subscribe(res => {
      console.log(res)
      if(res){
        this.target = res;
      }
    })
  }

  openCreateDialog(){
    this._dialog.open(ImageCrudComponent, 
      this._commonservice.configDialog("50%", { key: null, actionType: STATUS_ACTION.create })).afterClosed().subscribe(res => {
        if(res){
          this.loadData();
        }
      })
  }

  openDetailDialog(key: string) {
    this._dialog.open(ImageCrudComponent,
      this._commonservice.configDialog('70%', { key: key, actionType: STATUS_ACTION.detail })).afterClosed().subscribe(() => { });
  }

  openEditDialog(key: string) {
    this._dialog.open(ImageCrudComponent,
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
        message: `Bạn có chắc chắn xóa hình ảnh của sản phẩm <b>${title}</b> ?`,
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
