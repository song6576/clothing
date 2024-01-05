import memory from "../util/memory";

const menuList = [
    {
        title: '天气预报',
        key: '/home',
        icon: 'PieChartOutlined',
        role: ['管理员', '普通用户'],
    },
    {
        title: '系统用户',
        key: '/user',
        icon: 'TeamOutlined',
        role: ['管理员']
    },
    {
        title: '分类管理',
        key: '/classification',
        icon: 'HomeOutlined',
        role: ['管理员']
    },
    {
        title: '服装管理',
        key: '/supplies',
        icon: 'ApartmentOutlined',
        role: ['管理员', '普通用户'],
        children: [
            {
                title: '服装信息',
                key: '/supplies/materialInformation',
                role: ['管理员', '普通用户']
            },
            {
                title: '服装审批',
                key: '/supplies/suppliesAdmin',
                role: ['管理员', '普通用户']
            }
        ]
    },
    // {
    //   title: '记录管理',
    //   key: '/diagnosis',
    //   icon: 'WifiOutlined',
    //   role: ['管理员']
    // },
    {
        title: `${memory.user.role === '管理员' ? '打卡管理' : '每日打卡'}`,
        key: '/health',
        icon: 'VerifiedOutlined',
        role: ['普通用户', '管理员'],
        children: [
            {
                title: '打卡管理',
                key: '/health/healthAdmin',
                role: ['管理员']
            },
            {
                title: '每日打卡',
                key: '/health/clock',
                role: ['普通用户']
            }
        ]
    },
    {
        title: '个人中心',
        key: '/personal',
        icon: 'VerifiedOutlined',
        role: ['普通用户'],
    }
]

export default menuList