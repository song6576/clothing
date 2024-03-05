import React, { Component, useEffect, useState } from 'react';
import { Menu } from 'antd';
import * as Icons from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom';
import menuList from '../../config/menuConfig';
import storage from "../../util/storage";
import memory from "../../util/memory";
import { reqUsers } from '../../api/login';
import bus from '../../util/bus';

const { SubMenu } = Menu;

interface IProps {
}

const LeftNav = (props: IProps) => {
    const navigate = useNavigate();
    const [userList, setUserList] = useState({});
    const [userListRole, setUserListRole] = useState("");

    const getUserList = async () => {
        const result = await reqUsers();
        console.log("🚀 ~ file: index.tsx:21 ~ getUserList ~ result:", result)
        if (result.data.status === 200) {
            const userList = result.data.data
            const userListRole = userList.map((item: any) => {
                return item.role
            })
            setUserList(userList);
            setUserListRole(userListRole);
        }
    }
    const getMenuList = (menuList: any) => {
        return menuList.filter((r: any) => r.role.includes(storage.getRole())).map((item: any,index:number) => {
            // @ts-ignore
            const { render: IconRender } = Icons[item.icon] || { render: () => { } }
            if (!item.children) {
                return (
                    <Menu.Item key={index} icon={IconRender()}>
                        {/* <Link to={item.key}>{item.title}</Link> */}
                        {item.title}
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu key={item.key} icon={IconRender()} title={item.title}>
                        {getMenuList(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    const handleSelect = ({ item, key, keyPath, selectedKeys, domEvent }: any) => {
        memory.path = key;
        console.log(item, key, keyPath, selectedKeys, domEvent)
        bus.$emit('path', Number(key))
    };

    useEffect(() => {
        getUserList();
    }, [])

    return <div>
        <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <h3 style={{ color: 'white', fontSize: '20px' }}>服装分类管理系统</h3>
        </div>
        <Menu
            style={{ width: 200 }}
            defaultSelectedKeys={['0']}
            defaultOpenKeys={['0']}
            mode="inline"
            theme='dark'
            onClick={handleSelect}
        >
            {
                getMenuList(menuList)
            }
        </Menu>
    </div>
}

export default LeftNav;