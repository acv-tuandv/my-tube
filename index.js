/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './source/screen/HomeScreen';
// import App from './source/screen/DetailVideo'
import {name as appName} from './app.json';
console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => App);
