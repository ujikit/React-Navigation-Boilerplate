import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// components
import CustomSidebar from '../components/CustomSidebar';
// screens
import Home from '../screens/Home'

const Drawer = createDrawerNavigator();

function Home2 ({navigation}) {
  return(
    <Home navigation={navigation}/>
  )
}

export default function App() {
  return (
    <Drawer.Navigator
      drawerContent={
        props => <CustomSidebar {...props}/>
      }
    >
      <Drawer.Screen
        name="Home"
        component={Home2}
        initialParams={{is_authenticated: false}}
        options={({ route }) => ({
          // route.params.is_authenticated
          swipeEnabled: true
        })}
      />
    </Drawer.Navigator>
  );
}
