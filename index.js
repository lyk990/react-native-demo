/**
 * @format
 * @description: 入口文件
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// rn根节点的初始化
AppRegistry.registerComponent(appName, () => App);
