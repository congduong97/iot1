import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../screens/Home/Home';
import Setting from '../screens/Setting/Setting';
import Programs from '../screens/Programs/Programs';
import Introduce from '../screens/Introduce/Introduce';
import AppIntro from '../screens/AppIntro/AppIntro';
import Login from '../screens/Login/Login';
import {SIZE} from '../utils/resource';
import ContentComponent from '../screens/Home/items/ContentComponent';

const AppStack = createDrawerNavigator(
  {
    Home: {screen: Home},
    Setting: {screen: Setting},
    Programs: {screen: Programs},
    Introduce: {screen: Introduce},
  },
  {
    initialRouteName: 'Home',
    drawerWidth: SIZE.width(70),
    contentComponent: ContentComponent,
    drawerPosition: 'left',
    contentOptions: {
      activeBackgroundColor: 'red',
    },
  },
);
const AuthStack = createStackNavigator(
  {Login: {screen: Login}},
  {headerMode: 'none'},
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AppIntro: {screen: AppIntro},
      Auth: {screen: AuthStack},
      App: {screen: AppStack},
    },
    {
      navigationOptions: {
        gesturesEnabled: true,
      },
      headerMode: 'none',
      initialRouteName: 'AppIntro',
    },
  ),
);
