// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

// components
import CustomHeader from '../components/CustomHeader';

const HomeScreen = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        route={route}
        navigation={navigation}
      />
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Home Screen
          </Text>
          <Button
            onPress={() => navigation.navigate('SettingScreen')}
            title="Go to Setting Screen"
          />
          <Button
            onPress={() => navigation.navigate('ExploreScreen')}
            title="Go to Explore Screen"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
