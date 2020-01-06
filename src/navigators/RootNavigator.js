import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Programs from '../screens/Programs';
import Introduce from '../screens/Introduce';
import AppIntro from '../screens/AppIntro';
import Login from '../screens/Login';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({
  Home: {screen: Home},
  Setting: {screen: Setting},
  Programs: {screen: Programs},
  Introduce: {screen: Introduce},
});
const AuthStack = createStackNavigator({Login: Login});

export default createAppContainer(
  createStackNavigator(
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
