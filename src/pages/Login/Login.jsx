import React from 'react'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom'
// import { login, logout } from '../../store/modules/authSlice'
import Navigation from '../../components/Navigation/Navigation.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Login.scss'
import { Button, Form, Input } from 'antd';

export default function Login() {
    // const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const handleLogin = () => {
    //     dispatch(login())
    //     navigate('/')
    // }
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Navigation></Navigation>
            <div className="loginContainer">
                <div className="loginBox">
                    {/* <button onClick={handleLogin}>Log in</button>
                    <button onClick={() => dispatch(logout())}>Log out</button> */}
                    <h2>Login</h2>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit">
                                Log In
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}
