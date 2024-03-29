// 路由懒加载
import { lazy } from 'react';

const Home = lazy(() => import('./home'));
const Home2 = lazy(() => import('./home2'));
const Jiemi = lazy(() => import('./jiemicss'));
const ReactSourceCode = lazy(() => import('./react-source-code'));
const CSSWorld = lazy(() => import('./css-world'));
const CSSNewWorld = lazy(() => import('./css-new-world'));
const JsAdvanced = lazy(() => import('./js-advanced-programming'));

export { Home, Home2, Jiemi, ReactSourceCode, CSSWorld, CSSNewWorld, JsAdvanced };
