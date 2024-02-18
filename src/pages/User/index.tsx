import { reqUsers } from "../../api/login";
import { useEffect, useState } from "react";
import UserTable from "./table";
import { Button } from "antd";



const User = () => {
    return <div className='user'>
        {/* <Modal
            title='编辑'
            footer={null}
            visible={this.state.isModalVisibleedv}
            onOk={() => this.editorHandleOk()}
            onCancel={() => this.editorHandleCancel()}
        >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={this.editorOnFinish}
                onFinishFailed={this.editorOnFinishFailed}
                autoComplete="off"
                ref={this.ediver2}
            >
                <Form.Item
                    label="id"
                    name="id"
                    initialValue={this.state.user.id}
                >
                    <Input disabled={true} size='small' />
                </Form.Item>
                <Form.Item
                    label="用户名"
                    name="username"
                    initialValue={this.state.user.username}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="角色"
                    name="role"
                    initialValue={this.state.user.role}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    initialValue={this.state.user.password}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="手机号码"
                    name="iphone"
                    initialValue={this.state.user.iphone}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        修改
                    </Button>
                </Form.Item>
            </Form>
        </Modal>

        <div className='user-add'>
            <Button type="primary"
                icon={<PlusCircleOutlined />}
                onClick={this.showModal}
            >
                添加
            </Button>
            <Modal
                title="添加用户"
                footer={null}
                visible={this.state.isModalVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="id"
                        name="id"
                        initialValue={this.state.user.id}
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
                        <Button type="primary" htmlType="submit">
                            添加
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div> */}
        <UserTable />
    </div>
}

export default User;