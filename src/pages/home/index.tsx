import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';
import routeList from '../../routers/index';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface asiderObj {
  asiderName: String;
  index: String;
  children?: Array<Object>;
}
interface asiderChildrenObj {
  asiderName: String;
  index: String;
}

export default function Home() {
  routeList.splice(0, 1);
  let asiderList = routeList;
  let [subMenuList, setSubMenuList] = useState(asiderList[0].children);
  let [defaultSelectedKeys, setDefaultSelectedKeys] = useState([
    asiderList[0].key
  ]);
  let [defaultOpenKeys, setDefaultOpenKeys] = useState([
    asiderList[0].children[0].key
  ]);

  const handleAsiderList = asiderObj => {
    setSubMenuList(asiderObj.children);
    setDefaultSelectedKeys(asiderObj.key);
    setDefaultOpenKeys([asiderObj.children[0].key]);
  };

  return (
    <div className="home">
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={defaultSelectedKeys}>
            {asiderList.map(item => {
              return (
                <Menu.Item
                  key={item.key}
                  onClick={() => handleAsiderList(item)}>
                  {item.meta.title}
                </Menu.Item>
              );
            })}
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              selectedKeys={defaultOpenKeys}
              defaultOpenKeys={defaultSelectedKeys}
              style={{ height: '100%', borderRight: 0 }}>
              {subMenuList.map(el => {
                return (
                  <Menu.Item key={el.key}>
                    <Link to={el.path}>{el.text}</Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>11</Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}>
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
