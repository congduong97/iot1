import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Programs from '../screens/Programs';
import Introduce from '../screens/Introduce';
import AppIntro from '../screens/AppIntro';
import Login from '../screens/Login';
import {SIZE} from '../utils/resource';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createDrawerNavigator(
  {
    Home: {screen: Home},
    Setting: {screen: Setting},
    Programs: {screen: Programs},
    Introduce: {screen: Introduce},
  },
  {
    initialRouteName: 'Home',
    drawerWidth: SIZE.width(60),
    drawerPosition: 'left',
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
