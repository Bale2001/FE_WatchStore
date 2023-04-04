export const SUCCESS_RESPONSE = 'Success';
export const DUPLICATE_RESPONE = 'Duplicate';
export const NOTFOUND_RESPONE = 'NotFound';
export const SUCCESS_NOTICE = 'Thành công';
export const TITLE_NOTICE = 'Thông báo';
export const PAGE_SIZE = 10;
export const listSex = [
    {
        value: 1,
        text: 'Nam'
    },
    {
        value: 2,
        text: 'Nữ'
    },
    {
        value: 3,
        text: 'Khác'
    }
];
export const LBL_DISPLAY = {
    syncNgsp: 'Đồng bộ NGSP',
    add: 'Thêm mới',
    edit: 'Sửa',
    update: 'Cập nhập',
    delete: 'Xóa',
    view: 'Xem',
    search: 'Tìm kiếm',
    save: 'Lưu',
    print: 'In',
    close: 'Đóng',
    back: 'Quay lại',
    refresh: 'Làm mới',
    file: 'Chọn file',
    confirm: 'Xác nhận',
    cancel: 'Hủy',
    importFile: 'Import',
    downloadTemplate: 'Tải template',
    sync: 'Đồng bộ',
    download: 'Tải xuống',
    apidata: 'API'
};

export const WIDTH_DIALOG = '80%';
export const HEIGHT_DIALOG = '100%';
export const SEARCH_LABEL = 'Tìm kiếm';
export const REFRESH_LABEL = 'Làm mới';
export const ADDNEW_LABEL = 'Thêm mới';
export const EDIT_LABEL = 'Sửa';
export const DETAIL_LABEL = 'Xem';
export const DELETE_LABEL = 'Xóa';

export const FORMAT = [
    { format: 'PDF', color: '#e0051e' },
    { format: 'CSV', color: '#dfb100' },
    { format: 'XLSX', color: '#2db55d' },
    { format: 'XLS', color: '#2db55d' },
    { format: 'XLSB', color: '#207E42' },
    { format: 'JSON', color: '#ef7100' },
    { format: 'ZIP', color: '#686868' },
    { format: 'RAR', color: '#aaaaaa' },
    { format: 'HTML', color: '#2E759E' },
    { format: 'RDF', color: '#333' },
    { format: 'XML', color: '#D63B00' },
    { format: 'Esri REST', color: '#6e6e6e' },
    { format: 'API', color: '#D22D81' },
    { format: 'Webpage', color: '#6e6e6e' },
    { format: 'ArcGIS GeoServices REST API', color: '#D22D81' },
    { format: 'ArcGIS Online Map', color: '#333' },
    { format: 'GeoJSON', color: '#D63B00' },
    { format: 'KML', color: '#6e6e6e' },
    { format: 'Comma Separated Value Spreadsheet', color: '#333' },
    { format: 'application/vnd.google-apps.document', color: '#6e6e6e' },
    { format: 'DOC', color: '#6e6e6e' },
    { format: 'DOCX', color: '#6e6e6e' },
    { format: 'WFS', color: '#6e6e6e' },
    { format: 'QGIS', color: '#6e6e6e' },
]

// export const EXTRAS = {
//     encoding: 'encoding',
//     harvest_url: 'harvest_url'
// }

// export const ROUTE_PARENT = {
//     organization: 'organization',
//     dataset: 'dataset'
// }

// export const GROUPS = {
//     yte: 'y-te',
//     giaoduc: 'giao-duc',
// }

export const TABLE_NAME = {
    DMBACLUONG: 'DMBACLUONG',
    DMBANGLUONG: 'DMBANGLUONG',
    DMBUUCHINH: 'DMBUUCHINH',
    DMCHUCDANH: 'DMCHUCDANH',
    DMDANTOC: 'DMDANTOC',
    DMDANTOCKHAC: 'DMDANTOCKHAC',
    DMDOKHAN: 'DMDOKHAN',
    DMDVHANHCHINH: 'DMDVHANHCHINH',
    DMGDDTVN: 'DMGDDTVN',
    DMGIOITINH: 'DMGIOITINH',
    DMHESOLUONG: 'DMHESOLUONG',
    DMHESOLUONGVUNG: 'DMHESOLUONGVUNG',
    DMLOAICONGCHUC: 'DMLOAICONGCHUC',
    DMNHOMMAU: 'DMNHOMMAU',
    DMQLVBDH: 'DMQLVBDH',
    DMQUOCGIA: 'DMQUOCGIA',
    DMTHIDUAKHENTHUONG: 'DMTHIDUAKHENTHUONG',
    DMTINHTRANGHONNHAN: 'DMTINHTRANGHONNHAN',
    DMTONGIAO: 'DMTONGIAO',
    DMVANBANHANHCHINH: 'DMVANBANHANHCHINH',
    DMVANBANQUYDINHPHAPLUAT: 'DMVANBANQUYDINHPHAPLUAT',
    DMYNGHIANHOMMAU: 'DMYNGHIANHOMMAU',
    DM_NHOMLUONG: 'DM_NHOMLUONG',
}
export interface IRole {
    XEM: boolean;
    THEM: boolean;
    CAPNHAT: boolean;
    XOA: boolean;
    IMPORT: boolean;
    CHIASE: boolean;
    THUHOI: boolean;
    DONGBO: boolean;
}
export class Role implements IRole {
    XEM: boolean;
    THEM: boolean;
    CAPNHAT: boolean;
    XOA: boolean;
    IMPORT: boolean;
    CHIASE: boolean;
    THUHOI: boolean;
    DONGBO: boolean;
}

export enum ShareStatus {
    /// <summary>
    /// Không chia sẻ
    /// </summary>
    NotShare = 0,

    /// <summary>
    /// Chia sẻ người dân
    /// </summary>
    Public = 1,

    /// <summary>
    /// Chia sẻ cơ quan nhà nước
    /// </summary>
    Private = 2,

    /// <summary>
    /// Chia sẻ cả người dân, cả cqnn
    /// </summary>
    All = 3,

    /// <summary>
    /// Thu hồi
    /// </summary>
    Withdraw = 4,
}

export const LST_STATUS = [
    { value: 0, text: 'Đang soạn thảo' },
    { value: 1, text: 'Đã đăng tải' },
    { value: 3, text: 'Đã thu hồi' },
];

export const FORM_ACTION = {
    CREATE: 1,
    EDIT: 2,
    DETAIL: 3,
    DELETE: 4,
    SHARE: 5,
    RECOVER: 6,
    IMPORT: 7,
    VIEW_LIST: 8,
};

export enum FILE_TYPE {
    GROUPS = 201,
    DATA = 1
};

export const FOLDER_FILE = {
    GROUPS: 'Groups'
}
