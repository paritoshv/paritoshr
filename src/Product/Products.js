import React, { Component , Fragment, useDebugValue} from 'react';
import ReactDOM from "react-dom";
import history from '../history';
import { useHistory, Link } from "react-router-dom";
import { Button, Layout, Menu, Divider, Input } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import Home from '../Home/Home';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Search } = Input;
async function onclickcontactme(){
  history.push('/ContactMe');

}
export default function Products (){

   async function handleClick(){  
        console.log('click ');
      };
    
        
      return (
          
        
        <Layout className="layout">
        <Header>
        
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        
            <Menu.Item key="1"> Home </Menu.Item>
            <Menu.Item key="2">About Me</Menu.Item>
            <Menu.Item key="3" onClick={onclickcontactme} >Contact Me
            </Menu.Item>
        
        <Divider orientation="right" >
            <Menu.Item> Welcome User </Menu.Item>
            <Menu.Item><Button> <Link to="/"> LOGOUT </Link></Button></Menu.Item>
        </Divider>
         </Menu>
        </Header>
        <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        
        <SubMenu key="sub1" icon={<MailOutlined />} title="Menu">
        <Search placeholder="input search text" enterButton="Search" size="large"  />
          <Menu.ItemGroup key="g1" title="Home">
                <Menu.ItemGroup key="1"title="Module 1">
                    <Menu.Item key="1">Sub Module 1</Menu.Item>
                    <Menu.Item key="2">Sub Module 2</Menu.Item>
                    <Menu.Item key="3">Sub Module 3</Menu.Item>
                    <Menu.Item key="4">Sub Module 4</Menu.Item>
                    <Menu.Item key="5">Sub Module 5</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="2" title="Module2">
                    <Menu.Item key="1">Sub Module 1</Menu.Item>
                    <Menu.Item key="2">Sub Module 2</Menu.Item>
                    <Menu.Item key="3">Sub Module 3</Menu.Item>
                    <Menu.Item key="4">Sub Module 4</Menu.Item>
                    <Menu.Item key="5">Sub Module 5</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="3" title="Module 3">
                    <Menu.Item key="1">Sub Module 1</Menu.Item>
                    <Menu.Item key="2">Sub Module 2</Menu.Item>
                    <Menu.Item key="3">Sub Module 3</Menu.Item>
                    <Menu.Item key="4">Sub Module 4</Menu.Item>
                    <Menu.Item key="5">Sub Module 5</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="4" title="Module 4">
                    <Menu.Item key="1">Sub Module 1</Menu.Item>
                    <Menu.Item key="2">Sub Module 2</Menu.Item>
                    <Menu.Item key="3">Sub Module 3</Menu.Item>
                    <Menu.Item key="4">Sub Module 4</Menu.Item>
                    <Menu.Item key="5">Sub Module 5</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="5" title="Module 5">
                    <Menu.Item key="1">Sub Module 1</Menu.Item>
                    <Menu.Item key="2">Sub Module 2</Menu.Item>
                    <Menu.Item key="3">Sub Module 3</Menu.Item>
                    <Menu.Item key="4">Sub Module 4</Menu.Item>
                    <Menu.Item key="5">Sub Module 5</Menu.Item>
                </Menu.ItemGroup>
          </Menu.ItemGroup>
        </SubMenu>
        {/* <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu> */}
      </Menu>
        </Layout> 

    )
    
      
    

}
const { Header, Footer , Sider, Content } = Layout;
// const LOGOUT = ({history}) => (
//     <Fragment>
//       <h1>Home</h1>
//       <button onClick={() => history.push('/') } >Go to home</button>
//     </Fragment>
//     );
    
// const NAVkeys = () => (
//         <key><Link to="/">Home</Link></key>
//         <key> <a href="#news">About Me</a></li>
//         <h3><a href="#contact">Contact Me</a></h3>
// )
