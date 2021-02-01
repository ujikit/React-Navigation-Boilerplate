import * as React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {Icon} from 'native-base';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// components
import CustomSidebar from './src/components/CustomSidebar';
// configs
import {MAIN_COLOR} from './src/configs/Color';
// screens
import HomeScreen from './src/screens/Home';
import ExploreScreen from './src/screens/Explore';
import SettingScreen from './src/screens/Setting';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const getHeaderTitle = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'HomeScreen':
      return 'Home';
    case 'ExploreScreen':
      return 'Explore';
  }
  return 'Home';
};

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({focused}) => {

          let tabIconName;
          let tabIconColor;

          if (route.name === 'HomeScreen') {
            tabIconName = 'home';
            tabIconColor = focused ? MAIN_COLOR : 'gray';
          } else if (route.name === 'ExploreScreen') {
            tabIconName = focused ? 'settings-sharp' : 'ios-settings-outline';
            tabIconColor = focused ? MAIN_COLOR : 'gray';
          }

          return <View
            style={{flex: 1, justifyContent: 'center', marginBottom: -10}}>
            <Icon
              name={tabIconName}
              type="Ionicons"
              style={{fontSize: 20, color: tabIconColor}}
            />
          </View>

        },
        tabBarLabel: ({focused}) => {

          let tabLabelName;
          let tabLabelColor;

          if (route.name === 'HomeScreen') {
            tabLabelName = 'Home';
            tabLabelColor = focused ? MAIN_COLOR : 'gray';
          } else if (route.name === 'ExploreScreen') {
            tabLabelName = 'Explore';
            tabLabelColor = focused ? MAIN_COLOR : 'gray';
          }

          return <View style={{flex: 1, justifyContent: 'center', marginTop: -5}}>
            <Text style={{fontSize: 12, color: tabLabelColor}}>{tabLabelName}</Text>
          </View>

        },
      })}
      tabBarOptions={{
        activeTintColor: MAIN_COLOR,
        inactiveTintColor: 'gray',
        style: {
          height: 55,
          justifyContent: 'center',
          backgroundColor: '#e0e0e0',
        },
        labelStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
      />
    </Tab.Navigator>
  );
};

const NavigatorStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="BottomTabStack"
        component={BottomTabStack}
        options={({route}) => ({
          headerShown: false,
          headerTitle: getHeaderTitle(route),
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          title: 'Setting',
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={
          props => <CustomSidebar {...props}/>
        }
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}
      >
        <Drawer.Screen
          name="NavigatorStack"
          options={{drawerLabel: 'Home Screen Option'}}
          component={NavigatorStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerStack;
