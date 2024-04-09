'use client'
import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LogIn = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/user/login', values);
      console.log('Success:', response.data);
      localStorage.setItem("userData", JSON.stringify(response.data));
      router.push('/');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <header style={{ width: '100%', height: '60px', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%', justifyContent: 'space-around', gap: '100px' }} className="headerContent">
          <div>
            <img
              style={{ width: "91.16px", height: "45px" }}
              src="/Images/Logo.png"
              alt="Picture of the Logo"
            />
          </div>
          <div className="headerButton">
            <Button type="primary" className={router.pathname === '/login' ? 'changeButtonColor' : ''}>Login</Button>
            <Button onClick={() => router.push('/signin')}>SignUp</Button>
            <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => router.push('/admin_login')}>Admin</Button>
          </div>
        </div>
      </header>
      <section style={{ width: '100%', height: 'calc(100vh - 60px)', display: 'flex', gap: '100px', alignItems: 'center', border: '1px solid lightgray' }}>
        <img style={{ height: '100%', width: '48%', objectFit: 'fill' }} src="/Images/SignIn.png" alt="" />
        <div style={{ width: '567px', height: '100%', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
          <h1 style={{ color: '#333333', fontSize: '34px', fontWeight: '600' }}>Log In</h1>
          <p style={{ color: '#666666CC', fontSize: '16px', fontWeight: '500' }}>Log in for free to access to in any of our products </p>
          <Form
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item style={{ position: 'relative' }}>
              {loading ? (
                <Spin style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
              ) : (
                <Button style={{ width: '100%', backgroundColor: "#8A33FD" }} type="primary" htmlType="submit">
                  Submit
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default LogIn;

