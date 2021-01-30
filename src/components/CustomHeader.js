import React, { Component } from 'react'
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity, View } from "react-native";
import { Icon } from "native-base";
import {connect} from "react-redux";

// configs
import { MAIN_COLOR } from '../configs/Color'

function CustomHeaderComponent ({navigation}) {

  return (
    <View style={{ flexDirection: 'row', height: 58.5, backgroundColor: MAIN_COLOR }}>
      <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" type="Entypo" style={{fontSize: 25, color: 'white'}}/>
        </TouchableOpacity>
      </View>
      <View style={{width: '70%', padding: 8}}></View>
      <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
      </View>
    </View>
  )
}

export default CustomHeaderComponent;
