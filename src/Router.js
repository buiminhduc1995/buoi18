import Home from './Home'
import Message from './Message '
import Notification from './Notification'
import User from './User'
import {  createBottomTabNavigator} from 'react-navigation';
export default createBottomTabNavigator({
    Home: Home,
    Message: Message,
    Notification:Notification,
    User:User,
  });
  