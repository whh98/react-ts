import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { IRoute } from './index';

export interface propsType extends IRoute {
  routes?: IRoute[];
}
export default function RouteView(props: propsType) {
  return (
    <Routes>
      {props.routes.map(route => {
        if (route.children && route.children.length) {
          return (
            <Route key={route.key} path={route.path}>
              {route.children.map(el => {
                return (
                  <Route
                    path={el.path}
                    element={<el.component />}
                    key={el.key}></Route>
                );
              })}
            </Route>
          );
        } else {
          return (
            <Route
              key={route.key}
              path={route.path}
              element={<route.component />}></Route>
          );
        }
      })}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
