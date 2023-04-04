import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Quản lý tài khoản',
        icon: 'lock-outline',
        children: [
            {
                title: '+ Tài khoản người quản trị',
                link: '/admin/account-admin',
            },
            {
                title: '+ Tài khoản người dùng',
                link: '/admin/account-user',
            },
        ]
    },
    {
        title: 'Quản lý sản phẩm',
        icon: 'shopping-bag-outline',
        children: [
            {
                title: '+ Danh sách hãng sản xuất',
                link: '/admin/original'
            },
            {
                title: '+ Danh sách sản phẩm',
                link: '/admin/product'
            },
            {
                title: '+ Hình ảnh sản phẩm',
                link: '/admin/image'
            }
        ]
    },
    {
        title: 'Quản lý danh mục',
        icon: 'layers-outline',
        link: '/admin/category'
    },
    {
        title: 'Quản lý đơn hàng',
        icon: 'shopping-cart-outline',
        children: [
            {
                title: '+ Danh sách đơn hàng',
                link: '/admin/order'
            },
            {
                title: '+ Danh sách chi tiết đơn hàng',
                link: '/admin/order-detail'
            }
        ]
    },
    {
        title: 'Tương tác của khách hàng',
        icon: 'message-circle-outline',
        children: [
            {
                title: '+ Phản hồi của khách hàng',
                link: '/admin/feedback'
            },
            {
                title: '+ Bình luận về sản phẩm',
                link: '/admin/comment'
            }
        ]
    },

]