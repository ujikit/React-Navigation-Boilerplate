import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

function SettingsScreen ({route, navigation}) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        style={{marginTop: 20, backgroundColor: 'yellow'}}
      >
        <Text>Go To Detail</Text>
      </TouchableOpacity>
    </View>
  )
}

export default connect(state => ({}))(SettingsScreen);
