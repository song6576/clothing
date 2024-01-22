import memory from "../../util/memory";
import storage from "../../util/storage";
import { useNavigate, Routes, Route, Outlet } from "react-router-dom";
import './index.css';
import { useEffect, useState } from "react";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import React from "react";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';
import LeftNav from "../../component/left-nav";
import Home from "../Home";
import User from "../user";
import Order from '../order';
import bus from "../../util/bus";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', 'Option 1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const Admin = () => {
    const user: any = memory.user;
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const [path, setPath] = useState('/user'); // 存储路由
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    // 路由重定向到登陆页面
    useEffect(() => {
        if (!user) return navigate('/login');
        bus.$on('path', (path: any) => {
            setPath(path)
        })
    }, [])

    const menuClick = (e: any) => {
        console.log("🚀 ~ file: index.tsx:59 ~ menuClick ~ a,b,c:", e)
    }
    return (
        <React.Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <LeftNav />
                    {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} /> */}
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        <Breadcrumb style={{ margin: '16px 15px' }}>
                            <Breadcrumb.Item>
                                {path === '/user' && '角色管理'}
                                {path === '/order' && '订单管理'}
                                {path === '/finance' && '财务管理'}
                                {path === '/afterSale' && '售后管理'}
                                {path === '/client' && '客户管理'}
                                {path === '/storageIn' && '入库管理'}
                                {path === '/storageOut' && '出库管理'}
                                {path === '/inventory' && '库存管理'}
                                {path === '/system' && '系统设置'}
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="loginOut" onClick={() => {
                                storage.removeUser();
                                navigate('/login')
                            }}>退出登录</Breadcrumb.Item>
                        </Breadcrumb>
                        {/* <bottom>退出登录</bottom> */}
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        {path === '/user' && <User />}
                        {path === '/order' && <Order />}
                        {path === '/finance' && '财务管理'}
                        {path === '/afterSale' && '售后管理'}
                        {path === '/client' && '客户管理'}
                        {path === '/storageIn' && '入库管理'}
                        {path === '/storageOut' && '出库管理'}
                        {path === '/inventory' && '库存管理'}
                        {path === '/system' && '系统设置'}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </React.Fragment>
    )
}

export default Admin;
