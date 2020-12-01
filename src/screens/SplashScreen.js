import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import {StackActions} from '@react-navigation/routers';
import {connect, useDispatch} from 'react-redux';

function SplashScreen ({route, navigation}) {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Test</Text>
    </View>
  )
}

export default connect(state => ({}))(SplashScreen);
