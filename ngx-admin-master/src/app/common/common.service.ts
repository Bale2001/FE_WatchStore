
import { NbToastrService } from '@nebular/theme';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { LST_STATUS, ShareStatus, SUCCESS_NOTICE, TITLE_NOTICE } from './contants';
import { DatePipe } from '@angular/common';
import { MatDialogConfig } from '@angular/material/dialog';

@Injectable({
    providedIn: "root",
})
export class CommonService {
    constructor(
        private toastrService: NbToastrService,
    ) {}

    toastrSuccess(message?: string, title?: string) {
        this.toastrService.success(
            message ?? SUCCESS_NOTICE,
            title ?? TITLE_NOTICE,
            { icon: "" }
        );
    }

    toastrPrimary(message: string, title?: string) {
        this.toastrService.primary(message, title ?? TITLE_NOTICE, {
            icon: "",
        });
    }

    toastrWarning(message: string, title?: string) {
        this.toastrService.warning(message, title ?? TITLE_NOTICE, {
            icon: "",
        });
    }

    toastrDanger(message: string, title?: string) {
        this.toastrService.danger(message, title ?? TITLE_NOTICE, { icon: "" });
    }

    toastrInfo(message: string, title?: string) {
        this.toastrService.info(message, title ?? TITLE_NOTICE, { icon: "" });
    }

    toastrShow(message: string, title?: string) {
        this.toastrService.show(message, title ?? TITLE_NOTICE, { icon: "" });
    }

    toastrDefault(message: string, title?: string) {
        this.toastrService.default(message, title ?? TITLE_NOTICE, {
            icon: "",
        });
    }

    configDialog(widthDialog: string, data: any): MatDialogConfig {
        const DIALOG_CONFIG = new MatDialogConfig();
        // DIALOG_CONFIG.disableClose = true;
        DIALOG_CONFIG.width = widthDialog;
        DIALOG_CONFIG.height = "auto";
        // DIALOG_CONFIG.maxWidth = WIDTH_DIALOG;
        // DIALOG_CONFIG.maxHeight = HEIGHT_DIALOG;
        DIALOG_CONFIG.data = data;
        return DIALOG_CONFIG;
    }


    getStatusText(status: number) {
        if (
            status === ShareStatus.Public ||
            status === ShareStatus.Private ||
            status === ShareStatus.All
        ) {
            return LST_STATUS.find((c) => c.value === 1).text;
        }

        if (status === ShareStatus.NotShare) {
            return LST_STATUS.find((c) => c.value === 0).text;
        }

        if (status === ShareStatus.Withdraw) {
            return LST_STATUS.find((c) => c.value === 3).text;
        }
    }
}

@Pipe({
  name: 'pipeDate',
})
export class ConvertDatePipe implements PipeTransform {
  //#region CONVERT_DATE

  transform(value: any) {
    const datePipe = new DatePipe('en-US');
    value = datePipe.transform(value, 'yyyy-MM-dd');
    return value;
  }

  convertDateToString(target: Date): string {
    if (target) {
      return this.transform(target.toString());
    }
    return null;
  }
  convertStringToDateString(target: string): string {
    if (target) {
      if (target.length === 8) {
        const year = target.substr(0, 4);
        const month = target.substr(4, 2);
        const day = target.substr(6, 2);
        return day + '/' + month + '/' + year;
      }
      return target;
    }
  }
  convertStringToDate(target: string): Date {
    if (target && target.length === 8) {
      const year = +target.substr(0, 4);
      const month = +target.substr(4, 2);
      const day = +target.substr(6, 2);
      return new Date(year, month, day);
    }
    return null;
  }

  convertStringVnToDate(target: string): Date {
    if (target && target.length === 10) {
      const year = + target.substr(6, 4);
      const month = + target.substr(3, 2);
      const day = + target.substr(0, 2);
      return new Date(year, month, day);
    }
    return null;
  }

  convertStringToFormatInput(target: string): string {
    if (target && target.length === 8) {
      const year = target.substr(0, 4);
      const month = target.substr(4, 2);
      const day = target.substr(6, 2);
      return year + '-' + month + '-' + day;
    }
    return target;
  }

  convertStringddMMyyyyToFormatTextVN(target: string) {
    if (target && target.length === 8) {
      const year = target.substr(0, 4);
      const month = target.substr(4, 2);
      const day = target.substr(6, 2);
      return 'Ngày ' + day + ' tháng ' + month + ' năm ' + year;
    }
    return target;
  }

  convertStringDisplayToDateString(target: string) {
    if (target && target.length === 10) {
      const year = target.substr(0, 4);
      const month = target.substr(5, 2);
      const day = target.substr(8, 2);
      return year + month + day;
    }
    return target;
  }
  //#endregion
}
