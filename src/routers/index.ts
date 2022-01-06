// 首页
import home from '../pages/home';
// 数据分析
import monitor from '../pages/dashboard/monitor';
import analyze from '../pages/dashboard/analyze';
// 音频管理
import sxlist from '../pages/voice/sxlist';
import calllist from '../pages/voice/calllist';
// 活动中心

import add from '../pages/active/add';
import activeList from '../pages/active/list';
// 系统设置
import setting from '../pages/user/setting';
import userList from '../pages/user/list';

// 路由信息
export interface IRouteMeta {
  title: string;
  icon?: string;
}
// 接口定义
export interface RouteInterface {
  path?: string;
  component?: any;
  redirect?: string;
  // 路由信息
  meta?: IRouteMeta;
  // 是否校验权限 false 不校验  true 校验
  auth?: boolean;
  // key 路径的唯一值
  key?: string;
  // text: 模块说明
  text?: string;
}
export interface IRoute extends RouteInterface {
  children?: IRoute[];
}
const routes: IRoute[] = [
  {
    key: 'group6',
    meta: {
      icon: 'dashboard',
      title: '首页'
    },
    path: '/home',
    component:home
  },
  {
    key: 'group0',
    meta: {
      icon: 'dashboard',
      title: '数据分析'
    },
    path: '/dashboard',
    children: [
      {
        key: '1',
        text: '数据监控',
        path: '/dashboard/monitor',
        component: monitor
      },
      {
        key: '2',
        text: '数据分析',
        path: '/dashboard/analyze',
        component: analyze
      }
    ]
  },
  {
    key: 'group1',
    meta: {
      icon: 'play-circle',
      title: '音频管理'
    },
    path: '/voice',
    children: [
      {
        key: '6',
        text: '声兮列表',
        path: '/voice/sxlist',
        component: sxlist
      },
      {
        key: '7',
        text: '回声列表',
        path: '/voice/calllist',
        component: calllist
      }
    ]
  },
  {
    key: 'group2',
    meta: {
      icon: 'schedule',
      title: '活动中心'
    },
    path: '/active',
    redirect: '/active/list',
    children: [
      {
        key: '11',
        text: '活动列表',
        path: '/active/list',
        component: activeList
      },
      {
        key: '12',
        text: '新建活动',
        path: '/active/add',
        component: add
      }
    ]
  },
  {
    key: 'group5',
    meta: {
      icon: 'user',
      title: '系统设置'
    },
    path: '/user',
    children: [
      {
        key: '26',
        text: '个人设置',
        path: '/user/setting',
        component: setting
      },
      {
        key: '27',
        text: '用户列表',
        path: '/user/list',
        component: userList
      }
    ]
  }
];
export default routes;
