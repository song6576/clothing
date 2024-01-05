import React, { Component, useEffect, useState } from 'react';
import { Menu } from 'antd';
import * as Icons from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom';
import menuList from '../../config/menuConfig';
import storage from "../../util/storage";
import { reqUsers } from '../../api/login';

const { SubMenu } = Menu;

interface IProps {
}

const LeftNav = (props: IProps) => {
    const navigate = useNavigate();
    const [userList, setUserList] = useState({});
    const [userListRole,setUserListRole ] = useState("");

    const getUserList = async () => {
        const result = await reqUsers()
        console.log("🚀 ~ file: index.tsx:21 ~ getUserList ~ result:", result)
        if (result.data.status === 200) {
            const userList = result.data.data
            const userListRole = userList.map((item:any) => {
                return item.role
            })
            setUserList(userList);
            setUserListRole(userListRole);
        }
    }
    const getMenuList = (menuList: any) => {
        return menuList.filter((r: any) => r.role.includes(storage.getRole())).map((item:any) => {
            // @ts-ignore
            const { render: IconRender } = Icons[item.icon] || { render: () => { } }
            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={IconRender()} >
                        <Link to={item.key}>{item.title}</Link>
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

    useEffect(() => {
        getUserList();
    },[])

    return <div>
        <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <h3 style={{ color: 'white', fontSize: '20px' }}>服装分类管理系统</h3>
        </div>
        <Menu
            style={{ width: 200 }}
            defaultSelectedKeys={['/home']}
            defaultOpenKeys={['/home']}
            mode="inline"
            theme='dark'
            // onSelect={handleSelect}
        >
            {
                getMenuList(menuList)
            }
        </Menu>
    </div>
}

export default LeftNav;