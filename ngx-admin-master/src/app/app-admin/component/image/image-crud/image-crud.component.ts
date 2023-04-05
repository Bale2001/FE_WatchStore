import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../../../common/common.service';
import { ImageService } from '../image.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../@core/customs/constants';
import { Image } from '../../../../@core/data/watch-store.service';

@Component({
  selector: 'ngx-image-crud',
  templateUrl: './image-crud.component.html',
  styleUrls: ['./image-crud.component.scss']
})
export class ImageCrudComponent implements OnInit {

  listSanPham: any [] = [];

  constructor(
    private commonService: CommonService,
    private service: ImageService,
    @Inject(MAT_DIALOG_DATA) public dataRef: { key: number; actionType: number },
    private dialogRef: MatDialogRef<ImageCrudComponent>
  ) {  }

  statusAction = STATUS_ACTION;
  titlelabel = "hình ảnh sản phẩm"

  ngOnInit(): void {
    if (this.dataRef.actionType !== this.statusAction.create) {
      this.loadData();
    }
    this.service.getAllSanPham().subscribe(res => {
      this.listSanPham = res;
    })
  }

  target: Image = new Image();

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

  handleUpload(event : any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.target.imgFile = reader.result.toString();
    };
}

@ViewChild('avatar') avatar: ElementRef;
DeleteImg() {
    this.target.imgFile = null;
    let input = <HTMLInputElement>document.getElementById('loadimage');
    input.value = null;
}

  closeDialog(value?: boolean): void {
    this.dialogRef.close(value);
  }
}
