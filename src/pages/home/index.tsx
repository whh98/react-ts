import React from 'react';
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'; 
import './index.less'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface asiderObj {
  asiderName: String,
  index: String,
  children?: Array<Object>
}
interface asiderChildrenObj   { 
  asiderName: String,
  index: String
}

export default function Home() {
  const asiderList = [
    {
      asiderName: 'nav 1',
      index: '1',
      children: [
        {
          asiderName: 'option1',
          index: '4'
        },
        {
          asiderName: 'option2',
          index: '5'
        },
        {
          asiderName: 'option3',
          index: '6'
        },
        {
          asiderName: 'option4',
          index: '7'
        },
      ]
    },
    {
      asiderName: 'nav 2',
      index: '2',
      children: [
        {
          asiderName: 'option1',
          index: '8'
        },
        {
          asiderName: 'option2',
          index: '9'
        },
        {
          asiderName: 'option3',
          index: '10'
        },
        {
          asiderName: 'option4',
          index: '11'
        },
      ]
    },
    {
      asiderName: 'nav 3',
      index: '3',
      children: [
        {
          asiderName: 'option1',
          index: '12'
        },
        {
          asiderName: 'option2',
          index: '13'
        },
        {
          asiderName: 'option3',
          index: '14'
        },
        {
          asiderName: 'option4',
          index: '15'
        },
      ]
    },
  ]
  let SubMenuList = ''
  const handleAsiderList = (asiderObj)=>{
    SubMenuList =  asiderObj.children.map((el)=>{           
         return <Menu.Item key={el.index}>{el.asiderName}</Menu.Item>
       })
  }
  return (
  <div className='home'>
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          {
            asiderList.map((item)=>{ 
              return <Menu.Item  key={item.index} onClick={()=>handleAsiderList(item)}>{item.asiderName}</Menu.Item>
            })
          }
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            
            
            {SubMenuList}
              {/* <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item> */}
            </SubMenu>
            {/* <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3"> */}
              {/* <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item> */}
            {/* </SubMenu> */}
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
  )
}