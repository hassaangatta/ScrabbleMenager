import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { IdcardOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
const qs = require('qs');

const Login = ({ onLogin }) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const formData = qs.stringify({
      userName: userName,
      password: password
    });

    axios.post('http://localhost:5000/admin', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => {
        if (res.data.login === true) {
          message.success('Login successful');
          localStorage.setItem('adminLoggedIn', 'true');
          onLogin();
          window.location.reload(); // Reload the page after successful login
        } else {
          message.error('Login failed. Please check your credentials.');
        }
      })
      .catch(err => {
        console.log(err);
        message.error('Login failed. Please check your credentials.');
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
      <div style={{ flexGrow: 1, maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Login</h1>
        <Form onFinish={handleLogin}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<IdcardOutlined />} placeholder="Username" onChange={e => setUsername(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" onChange={e => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Login</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
