import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';

// configs
import {store, persistor} from './src/states/store/store';
// screens
import Drawer from './src/routes/DrawerNavigator';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import Detail from './src/screens/Detail';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Provider store={store}>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Drawer} />
        <HomeStack.Screen name="Detail" component={Detail} />
      </HomeStack.Navigator>
    </Provider>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <Provider store={store}>
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="Settings" component={Settings} />
        <SettingsStack.Screen name="Detail" component={Detail} />
      </SettingsStack.Navigator>
    </Provider>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
              iconColor = focused ? 'tomato' : 'gray';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings-sharp' : 'ios-settings-outline';
              iconColor = focused ? 'tomato' : 'gray';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} type="Ionicons" style={{ fontSize: 22, color: iconColor, paddingRight: 3 }}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
