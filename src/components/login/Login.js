import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {Link,useHistory} from 'react-router-dom';
import { login } from '../../api/auth';
import LocalStorageService from '../../utils/localstorage';
import "./login.css"


const Login = () => {
  let history = useHistory();
  const onFinish = (values) => {
    
    login(values).then((response) => {
      console.log('response', response);
      if(response && response.success){
        LocalStorageService.setData('token', response.token);
        LocalStorageService.setData('refresh', response.token);
        history.push("/user/dashboard");
      }
    })
    console.log('Success:', values);
  };



  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h1>Login</h1>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input  placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or &nbsp; &nbsp;
        <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>)
}

export default Login;