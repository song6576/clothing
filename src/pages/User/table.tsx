import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Space, Table, TableProps, Tag } from "antd";
import { PlusCircleOutlined } from '@ant-design/icons'
import { reqUsers } from "../../api/login";

interface DataType {
    id: any;
    key: string;
    username: string;
    age: number;
    address: string;
    tags: string[];
}

const UserTable = (props: any) => {
    console.log("User Table", props)
    const [userData, setUserData] = useState([])
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Id',
            dataIndex: 'id',
            width: 50,
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: '用户名',
            dataIndex: 'username',
        },
        {
            title: '角色',
            dataIndex: 'role',
            render: (name, b) => {
                let color = name === '管理员' ? 'red' : 'green';
                return <>
                    <Tag color={color}>{name}</Tag>
                </>
            }
        },
        {
            title: '电话',
            dataIndex: 'iphone',
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
        },
        {
            title: '操作',
            dataIndex: 'operation',
        }
    ];
    // 查询用户
    const queryUser = async () => {
        const result = await reqUsers();
        let data: any = [];
        if (result.status === 200) {
            const role = result.data
            console.log(role);
            for (let i = 0; i < role.length; i++) {
                data.push({
                    key: i,
                    id: `${i + 1}`,
                    username: `${role[i].username}`,
                    role: `${role[i].role}`,
                    iphone: `${role[i].iphone}`,
                    createTime: `${role[i].created}`,
                    operation: <div>
                        <Button type="primary" className="btnColor" onClick={() => ediver()}>
                            <span onClick={() => showEditor()}>编辑</span>
                        </Button>
                        {/* users[i].id 拿到用户的真实id  users[i].username 拿到用户名 */}
                        <Button type="primary" danger style={{ marginLeft: '10px' }} onClick={() => delect()}>删除</Button>
                    </div>
                });
            }
        }
        setUserData(data)
    }
    const ediver = () => { };
    const showEditor = () => { };
    const delect = () => {

    }
    useEffect(() => {
        queryUser();
    }, [])
    return <React.Fragment>
        <Table
            size='small'
            bordered={true}
            columns={columns}
            dataSource={userData}
        />
    </React.Fragment>
}

export default UserTable;