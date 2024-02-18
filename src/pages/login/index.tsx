import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import './index.sass';
import { reqAddUser, reqLogin } from '../../api/login';
import memory from '../../util/memory';
import storage from '../../util/storage';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  /**
  * 提交·表单
  * @param {*} values
  */
  const onFinish = async (values: any) => {
    const { username, password } = values
    if (isLogin) {
      const result = await reqLogin(username, password)
      try {
        message.success(`${username}欢迎回来!`)
        //保存user
        const user = result.data
        memory.user = user
        storage.saveUser(user) // 存储到local里面
        // 跳转到admin管理界面，不需要回退到登录
        // props.history.replace('/')
      } catch (error) {
        message.error('登录失败，请重新登录')
      }
    } else {
      await reqAddUser(username, password, values.iphone);
      try {
        message.success('注册成功，请返回登录')
      } catch (error) {
        message.success('注册失败，请重新注册')
      }
    }
  };

  const onFinishFailed = () => {
    message.error('登录失败，请重新登录')
  };

  return (
    <div className='content'>
      <div className='header'>
        <h3>欢迎来到服装分类管理系统</h3>
      </div>
      <div className='login-box'>
        <h1>登录</h1>
        <div className='output-form'>
          {
            isLogin ? <div className="flex flex-col flex-ai">
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{ marginTop: '15px' }}
              >
                <Form.Item
                  label="账号"
                  name="username"
                  rules={[{ required: true, message: '请输入您的用户名!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="密码"
                  name="password"
                  rules={[{ required: true, message: '请输入您的密码!' }]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
                  <Button type="primary" htmlType="submit" style={{ marginTop: '20px', width: '100%' }}>
                    登录
                  </Button>
                </Form.Item>
              </Form>
              <div className='register' onClick={() => setIsLogin(false)}>创建账号</div>
            </div> : <div className=''>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{ marginTop: '15px' }}
              >
                <Form.Item
                  label="账号"
                  name="username"
                  rules={[{ required: true, message: '请输入您的用户名!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="密码"
                  name="password"
                  rules={[{ required: true, message: '请输入您的密码!' }]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  label="手机号"
                  name="iphone"
                  rules={[{ required: true, message: '请输入您的手机号!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
                  <Button type="primary" htmlType="submit" style={{ marginTop: '20px', width: '100%' }}>
                    注册
                  </Button>
                </Form.Item>
              </Form>
              <div className='block' onClick={() => setIsLogin(true)}>返回登录</div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
export default Login;
