import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { ProductService } from '../product.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../@core/customs/constants';
import { Product } from '../../../@core/data/watch-store.service';

@Component({
  selector: 'ngx-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {

  listSale: any [] = [{text: "Có", value: true}, {text: "Không", value: false}];
  listOriginal: any [] = [];
  listCategory: any [] = [];

  constructor(
    private commonService: CommonService,
    private service: ProductService,
    @Inject(MAT_DIALOG_DATA) public dataRef: { key: number; actionType: number },
    private dialogRef: MatDialogRef<ProductCrudComponent>
  ) {  }

  statusAction = STATUS_ACTION;
  titlelabel = "sản phẩm"

  ngOnInit(): void {
    if (this.dataRef.actionType !== this.statusAction.create) {
      this.loadData();
    }

    this.service.selectAllOriginal().subscribe(res => {
      this.listOriginal = res;
    })

    this.service.selectAllCategory().subscribe(res =>{
      this.listCategory = res;
    })
  }

  target: Product = new Product();

  loadData(): void {
    this.service.selectOne(this.dataRef.key).subscribe((res) => {
      if (res) {
        console.log(res)
        this.target = res;
      } else {
        this.closeDialog(false);
      }
    });
  }

  save(): void {
    if (this.dataRef.actionType === STATUS_ACTION.create) {
      this.service.insert(this.target).subscribe((res) => {
        console.log(res)
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
        this.target.proAvatar = reader.result.toString();
    };
}

@ViewChild('avatar') avatar: ElementRef;
DeleteImg() {
    this.target.proAvatar = null;
    let input = <HTMLInputElement>document.getElementById('loadimage');
    input.value = null;
}

  closeDialog(value?: boolean): void {
    this.dialogRef.close(value);
  }

}
