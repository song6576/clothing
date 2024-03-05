import React, { useState } from 'react';
import { Table, Modal, Button, Form, Input, Select } from 'antd';
import { RefundData } from './mojc';

// 退款订单
const Finance = () => {
    const [data, setData]: any = useState(RefundData);
    const [editingItem, setEditingItem]: any = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: '用户账号',
            dataIndex: 'userName',
        },
        {
            title: '支出',
            dataIndex: 'amountOut',
        },
        {
            title: '充值',
            dataIndex: 'amountIn',
        },
        {
            title: '提交时间',
            dataIndex: 'createTime',
        },
        {
            title: '操作',
            render: (_: any, record: any) => (
                <>
                    <Button type="primary" danger style={{ marginLeft: '10px' }} onClick={() => handleDelete(record.id)}>删除</Button>
                </>
            ),
        },
    ];

    const handleDelete = (id: number) => {
        setData(data.filter((item: any) => item.id !== id));
    };

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div>
            <Table dataSource={data} columns={columns} />
        </div>
    );
};

export default Finance;