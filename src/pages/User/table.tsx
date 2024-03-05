import React, { useEffect, useState, useRef } from "react";
import { Button, Form, Input, Modal, Space, Table, TableProps, Tag, message } from "antd";
import { PlusCircleOutlined } from '@ant-design/icons'
import { reqAddUser, reqUpdataUser, reqUsers, reqdelUser } from "../../api/login";

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
    const [userData, setUserData]: any = useState([]);
    const [user, setUser]: any = useState({});
    const [isModalVisibleedv, setIsModalVisibleedv] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const ediver2: any = useRef(null);
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
            for (let i = 0; i < role.length; i++) {
                data.push({
                    key: i,
                    id: `${i + 1}`,
                    username: `${role[i].username}`,
                    role: `${role[i].role}`,
                    iphone: `${role[i].iphone}`,
                    createTime: `${role[i].created}`,
                    operation: <div>
                        <Button type="primary" className="btnColor" onClick={() => ediver(role[i])}>
                            <span>编辑</span>
                        </Button>
                        <Button type="primary" danger style={{ marginLeft: '10px' }} onClick={() => delect(role[i].id, role[i].username)}>删除</Button>
                    </div>
                });
            }
        }
        setUserData(data)
    }
    const delect = async (i: number, username: string) => {
        const result = await reqdelUser(i)
        if (result.status === 200) {
            message.success(`删除${username}用户成功`)
            queryUser()
        } else {
            message.error(`删除${username}用户失败`)
        }
    }
    const editorHandleOk = () => {
        setIsModalVisibleedv(false);
    }
    const editorHandleCancel = () => {
        setIsModalVisibleedv(false);
    }
    const editorOnFinishFailed = (errorInfo?: any) => {
    }
    /**
   * 编辑用户信息modul弹窗
   * @returns
   */
    const ediver = (user: any) => {
        setIsModalVisibleedv(true);
        setUser(user);
        ediver2?.current?.setFieldsValue({ id: user.id, username: user.username, password: user.password, role: user.role, iphone: user.iphone })
    };
    const editorOnFinish = async (values?: any) => {
        const { id, username, password, role, iphone } = values
        const result = await reqUpdataUser(id, username, password, role, iphone)
        if (result.status === 200) {
            message.success(`${username}用户修改成功`)
            queryUser()
        } else {
            message.error(`${username}用户修改失败`)
        }
        setIsModalVisibleedv(false);
    }

    /**
     * 添加用户
     */
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const showModal = () => {
        setIsModalVisible(true);
    }
    const onFinish = async (values?: any) => {
        const { username, password, iphone, id } = values;
        const result = await reqAddUser(username, password, iphone)
        if (result.status === 200) {
            message.success('添加用户成功')
            handleCancel() // 添加成功关闭弹窗
            queryUser() // 添加成功重新查询用户列表
        } else {
            message.error('添加用户失败/用户名已存在')
        }
    };
    const onFinishFailed = () => {
        message.error('请添加用户')
    };
    useEffect(() => {
        queryUser();
    }, [])
    return <React.Fragment>
        <Modal
            title='编辑'
            footer={null}
            visible={isModalVisibleedv}
            onOk={() => editorHandleOk()}
            onCancel={() => editorHandleCancel()}
        >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={(e) => editorOnFinish(e)}
                onFinishFailed={(e) => editorOnFinishFailed(e)}
                autoComplete="off"
                ref={ediver2}
            >
                <Form.Item
                    label="id"
                    name="id"
                    initialValue={user.id}
                >
                    <Input disabled={true} size='small' />
                </Form.Item>
                <Form.Item
                    label="用户名"
                    name="username"
                    initialValue={user.username}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="角色"
                    name="role"
                    initialValue={user.role}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    initialValue={user.password}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="手机号码"
                    name="iphone"
                    initialValue={user.iphone}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className="btnColor">
                        修改
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
        <Button type="primary" className="btnColor" onClick={() => showModal()}>新增角色</Button>
        <Modal
            title="添加用户"
            footer={null}
            visible={isModalVisible}
            onOk={() => handleOk()}
            onCancel={() => handleCancel()}
        >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={(e) => onFinish(e)}
                onFinishFailed={() => onFinishFailed()}
                autoComplete="off"
            >
                <Form.Item
                    label="id"
                    name="id"
                    initialValue={user.id}
                >
                    <Input disabled={true} size='small' />
                </Form.Item>
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请添加用户账号!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请添加用户密码!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="手机号码"
                    name="iphone"
                    rules={[
                        { required: true, pattern: new RegExp(/^[1-9]\d*$/, "g"), message: '请添加用户手机号码!' },
                        { min: 11, max: 13, message: '手机号码格式错误!' },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className="btnColor">
                        添加
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
        <Table
            size='small'
            bordered={true}
            columns={columns}
            dataSource={userData}
        />
    </React.Fragment>
}

export default UserTable;