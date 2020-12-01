import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';

function DetailScreen ({route, navigation}) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detail</Text>
    </View>
  )
}

export default connect(state => ({}))(DetailScreen);
