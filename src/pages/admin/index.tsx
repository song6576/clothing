import memory from "../../util/memory";
import storage from "../../util/storage";
import { useNavigate } from "react-router-dom";
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import './index.css';
import { useEffect, useState } from "react";
import React from "react";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';
import LeftNav from "../../component/left-nav";
import User from "../user";
import Order from '../order';
import bus from "../../util/bus";
import Refund from "../order/refund";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('角色管理', 0, <PieChartOutlined  />),
    getItem('订单管理', '', <DesktopOutlined />, [
        getItem('订单列表', 1),
        getItem('退款订单', 2),
    ]),
    getItem('财务管理', 3, <ContainerOutlined />),
    getItem('售后管理', 4, <MailOutlined />),
    getItem('客户管理', 5, <MailOutlined />),
    getItem('入库管理', 6, <MailOutlined />),
    getItem('出库管理', 7, <MailOutlined />),
    getItem('库存管理', 8, <MailOutlined />),
    getItem('系统设置', 9, <MailOutlined />),
];

const Admin = () => {
    const user: any = memory.user;
    const navigate = useNavigate();
    const [path, setPath]: any = useState(0); // 存储路由
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    // 路由重定向到登陆页面
    useEffect(() => {
        if (!user) return navigate('/login');
    }, [])

    const handleSelect = ({ item, key, keyPath, selectedKeys, domEvent }: any) => {
        setPath(Number(key))
    };
    console.log(path)
    return (
        <React.Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    {/* <LeftNav /> */}
                    <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={items} onClick={handleSelect} />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        <Breadcrumb style={{ margin: '16px 15px' }}>
                            <Breadcrumb.Item>
                                {path === 0 && '角色管理'}
                                {path === 1 && '订单管理'}
                                {path === 2 && '退款订单'}
                                {path === 3 && '财务管理'}
                                {path === 4 && '售后管理'}
                                {path === 5 && '客户管理'}
                                {path === 6 && '入库管理'}
                                {path === 7 && '出库管理'}
                                {path === 8 && '库存管理'}
                                {path === 9 && '系统设置'}
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="loginOut" onClick={() => {
                                storage.removeUser();
                                navigate('/login')
                            }}>退出登录</Breadcrumb.Item>
                        </Breadcrumb>
                        {/* <bottom>退出登录</bottom> */}
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        {/* {path === '/user' && <User />}
                        {path === '/order' && <Order />}
                        {path === '/finance' && '财务管理'}
                        {path === '/afterSale' && '售后管理'}
                        {path === '/client' && '客户管理'}
                        {path === '/storageIn' && '入库管理'}
                        {path === '/storageOut' && '出库管理'}
                        {path === '/inventory' && '库存管理'}
                        {path === '/system' && '系统设置'} */}
                        {path === 0 && <User />}
                        {path === 1 && <Order />}
                        {path === 2 && <Refund />}
                        {path === 3 && '财务管理'}
                        {path === 4 && '售后管理'}
                        {path === 5 && '客户管理'}
                        {path === 6 && '入库管理'}
                        {path === 7 && '出库管理'}
                        {path === 8 && '库存管理'}
                        {path === 9 && '系统设置'}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </React.Fragment>
    )
}

export default Admin;
