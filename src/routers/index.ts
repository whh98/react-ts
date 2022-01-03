import Home from '../pages/home';
import About from '../pages/about';
// 路由信息
export interface IRouteMeta {
  title: string;
  icon?: string;
}
// 接口定义
export interface RouteInterface {
  path: string,
  component?: any,
  redirect?: string,
  // 路由信息
  meta?:IRouteMeta,
  // 是否校验权限 false 不校验  true 校验
  auth?: boolean
}
export interface IRoute extends RouteInterface {
  children?: IRoute[];
}
const routes:IRoute[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About
  },
];
export default routes