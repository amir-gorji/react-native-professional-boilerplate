import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Profile, Settings } from '@constants/navigationConstants/screens'
import routes from '@constants/navigationConstants/routes';
import NavigationService from '@services/NavigationService';


enableScreens();
const Stack = createStackNavigator();

{/* <StatusBar barStyle="dark-content" /> */ }

const App = () => {
  return (
    <NavigationContainer ref={NavigationService.init}>
      <Stack.Navigator>
        <Stack.Screen component={Home} name={routes.Home} />
        <Stack.Screen component={Profile} name={routes.Profile} />
        <Stack.Screen component={Settings} name={routes.Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
