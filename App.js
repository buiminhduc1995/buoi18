import Router from './src/Router'
import Login from './src/Login'

import {createStackNavigator} from 'react-navigation';
export default createStackNavigator({
    Login:Login,
    Router: Router,
  },{
    navigationOptions: {
        header: null
    }
});
  