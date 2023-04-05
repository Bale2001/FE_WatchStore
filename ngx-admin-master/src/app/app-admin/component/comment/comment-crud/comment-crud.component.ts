import { Component, Inject, OnInit } from '@angular/core';
import { CommonService } from '../../../../common/common.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../@core/customs/constants';
import { CommentService } from '../comment.service';
import { Comment } from '../../../../@core/data/watch-store.service';

@Component({
  selector: 'ngx-comment-crud',
  templateUrl: './comment-crud.component.html',
  styleUrls: ['./comment-crud.component.scss']
})
export class CommentCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private service: CommentService,
    @Inject(MAT_DIALOG_DATA) public dataRef: { key: number; actionType: number },
    private dialogRef: MatDialogRef<CommentCrudComponent>
  ) { }
  
  statusAction = STATUS_ACTION;
  titlelabel = "bình luận về sản phẩm";
  listNguoiDung: any [] = [];
  listSanPham: any [] = [];

  ngOnInit(): void {
    if (this.dataRef.actionType !== this.statusAction.create) {
      this.loadData();
    }
    this.service.getAllKhachHang().subscribe(res => {
      this.listNguoiDung = res;
    })
    this.service.getAllSanPham().subscribe(res => {
      this.listSanPham = res;
    })
  }


  target: Comment = new Comment();

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
