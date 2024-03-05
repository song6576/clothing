import React, { useState } from 'react';
import { Table, Modal, Button, Form, Input, Select } from 'antd';
import { Modata } from './mojc';

// 退款订单
const Refund = () => {
    const [data, setData]: any = useState(Modata);
    const [editingItem, setEditingItem]: any = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const columns = [
        {
            title: '编号',
            dataIndex: 'id',
        },
        {
            title: '订单编号',
            dataIndex: 'orderNo',
        },
        {
            title: '商品名称',
            dataIndex: 'name',
        },
        {
            title: '提交时间',
            dataIndex: 'createTime',
        },
        {
            title: '用户账号',
            dataIndex: 'userName',
        },
        {
            title: '订单金额',
            dataIndex: 'amount',
        },
        {
            title: '支付方式',
            dataIndex: 'pay',
        },
        {
            title: '订单状态',
            dataIndex: 'status',
        },
        {
            title: '操作',
            render: (_: any, record: any) => (
                <>
                    <Button type="primary" className="btnColor" style={{ marginLeft: '10px' }} onClick={() => handleEdit(record)}>编辑</Button>
                    <Button type="primary" danger style={{ marginLeft: '10px' }} onClick={() => handleDelete(record.id)}>删除</Button>
                </>
            ),
        },
    ];

    const handleDelete = (id: number) => {
        setData(data.filter((item: any) => item.id !== id));
    };

    const handleEdit = (record: any) => {
        setEditingItem(record);
        setIsModalVisible(true);
    };

    const handleSave = (values: any) => {
        setData(data.map((item: { id: any; }) => item.id === editingItem.id ? { ...item, ...values } : item));
        setIsModalVisible(false);
    };

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div>
            <Table dataSource={data} columns={columns} />
            <Modal
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
                title='编辑'
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="订单编号"
                        name="orderNo"
                    >
                        <Input disabled={true} size='small' />
                    </Form.Item>
                    <Form.Item
                        label="用户账号"
                        name="username"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="商品名称"
                        name="name"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="订单金额"
                        name="amount"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="支付方式"
                        name="pay"
                    >
                        <Select
                            defaultValue="微信支付"
                            style={{ width: 120 }}
                            onChange={handleChange}
                            options={[
                                { value: '微信支付', label: '微信支付' },
                                { value: '支付宝支付', label: '支付宝支付' },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="订单状态"
                        name="status"
                    >
                        <Select
                            defaultValue="退款中"
                            style={{ width: 120 }}
                            onChange={handleChange}
                            options={[
                                { value: '退款中', label: '退款中' },
                                { value: '完成', label: '完成' },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" className="btnColor">
                            修改
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Refund;