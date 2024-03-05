import React, { useState } from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import { Modata } from './mojc';

const Order = () => {
    const [data, setData]:any = useState(Modata);
    const [editingItem, setEditingItem]:any = useState(null);
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
            render: (_:any, record:any) => (
                <>
                    <Button type="primary" danger style={{ marginLeft: '10px' }} onClick={() => handleDelete(record.id)}>删除</Button>
                </>
            ),
        },
    ];

    const handleDelete = (id:number) => {
        setData(data.filter((item:any) => item.id !== id));
    };

    const handleEdit = (record:any) => {
        setEditingItem(record);
        setIsModalVisible(true);
    };

    const handleSave = (values:any) => {
        setData(data.map((item: { id: any; }) => item.id === editingItem.id ? { ...item, ...values } : item));
        setIsModalVisible(false);
    };

    return (
        <div>
            <Table dataSource={data} columns={columns} />
            <Modal
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
            </Modal>
        </div>
    );
};

export default Order;