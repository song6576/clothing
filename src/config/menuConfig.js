import memory from "../util/memory";

const menuList = [
    {
        title: '角色管理',
        key: '/user',
        icon: 'TeamOutlined',
        role: ['管理员'],
    },
    {
        title: '订单管理',
        key: '/order',
        icon: 'PieChartOutlined',
        role: ['管理员'],
        children: [
            {
                title: '订单列表',
                key: '/supplies/materialInformation',
                role: ['管理员']
            },
            {
                title: '退款订单',
                key: '/supplies/suppliesAdmin',
                role: ['管理员']
            }
        ]
    },
    {
        title: '财务管理',
        key: '/finance',
        icon: 'HomeOutlined',
        role: ['管理员']
    },
    {
        title: '售后管理',
        key: '/afterSale',
        icon: 'ApartmentOutlined',
        role: ['管理员'],
        // children: [
        //     {
        //         title: '服装信息',
        //         key: '/supplies/materialInformation',
        //         role: ['管理员', '普通用户']
        //     },
        //     {
        //         title: '服装审批',
        //         key: '/supplies/suppliesAdmin',
        //         role: ['管理员', '普通用户']
        //     }
        // ]
    },
    {
        title: '客户管理',
        key: '/client',
        icon: 'VerifiedOutlined',
        role: ['管理员'],
    },
    {
        title: '入库管理',
        key: '/storageIn',
        icon: 'VerifiedOutlined',
        role: ['管理员'],
    },
    {
        title: '出库管理',
        key: '/storageOut',
        icon: 'VerifiedOutlined',
        role: ['管理员'],
    },
    {
        title: '库存管理',
        key: '/inventory',
        icon: 'VerifiedOutlined',
        role: ['管理员'],
    },
    {
        title: '系统设置',
        key: '/system',
        icon: 'VerifiedOutlined',
        role: ['管理员'],
    }
    // {
    //   title: '记录管理',
    //   key: '/diagnosis',
    //   icon: 'WifiOutlined',
    //   role: ['管理员']
    // },
    // {
    //     title: `${memory.user.role === '管理员' ? '打卡管理' : '每日打卡'}`,
    //     key: '/health',
    //     icon: 'VerifiedOutlined',
    //     role: ['普通用户', '管理员'],
    //     children: [
    //         {
    //             title: '打卡管理',
    //             key: '/health/healthAdmin',
    //             role: ['管理员']
    //         },
    //         {
    //             title: '每日打卡',
    //             key: '/health/clock',
    //             role: ['普通用户']
    //         }
    //     ]
    // },
    // {
    //     title: '个人中心',
    //     key: '/personal',
    //     icon: 'VerifiedOutlined',
    //     role: ['普通用户'],
    // }
]

export default menuList