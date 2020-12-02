import React, { useState, useEffect } from 'react';
import { ImageBackground, ScrollView, Text, View, TouchableHighlight } from 'react-native';
import { Container, Content, Icon, Thumbnail } from 'native-base';
import { connect, useDispatch } from 'react-redux';

// configs
import { MAIN_COLOR, BLACK_FONT } from '../configs/Color'
import { MAIN_FONT, MAIN_FONT_BOLD } from '../configs/Font'

function CustomSidebarScreen ({route, navigation}) {

  return (
    <Container>
      <Content>
        <ImageBackground style={{ justifyContent: 'center', backgroundColor: MAIN_COLOR, height: 185, padding: 22 }}>
          <Thumbnail large source={require('../assets/images/user.png')} />
          <View style={{marginTop:10}}>
            <Text numberOfLines={1} style={{color: BLACK_FONT, fontWeight: 'bold', fontSize: 16, marginTop: 10 }}>Testing User</Text>
          </View>
          <View>
            <Text numberOfLines={1} style={{color: BLACK_FONT, fontSize: MAIN_FONT, marginTop: 10 }}>tes@testing.com</Text>
          </View>
        </ImageBackground>
        <View style={{marginTop: 7, height: 240}}>
          <ScrollView>
            <TouchableHighlight underlayColor={`#f1f1f1`} onPress={() => alert('tes')} style={{height: 60}}>
              <View style={{flex:1, flexDirection: 'row', alignItems: 'center', paddingLeft: 22}}>
                <View style={{flex:0.5}}>
                  <Icon type="Foundation" name="star" style={{ color: BLACK_FONT, fontSize: 25 }} />
                </View>
                <View style={{flex:2.5}}>
                  <Text numberOfLines={1} style={{ color: BLACK_FONT, ...MAIN_FONT_BOLD, paddingRight: 25}}>Data satu</Text>
                </View>
              </View>
            </TouchableHighlight>
          </ScrollView>
        </View>
        <View style={{ marginTop: 10, marginBottom: 10, paddingRight: 5, paddingLeft: 5, borderBottomColor: `rgb(208, 208, 208)`, borderBottomWidth: 1 }} />
        <View>
          <TouchableHighlight underlayColor={`#f1f1f1`} onPress={() => alert('tes')} style={{height: 60}}>
            <View style={{flex:1, flexDirection: 'row', alignItems: 'center', paddingLeft: 22}}>
              <View style={{flex:0.5}}>
                <Icon type="Foundation" name="star" style={{ color: BLACK_FONT, fontSize: 21 }} />
              </View>
              <View style={{flex:2.5}}>
                <Text style={{ color: BLACK_FONT, ...MAIN_FONT_BOLD, paddingRight: 25}}>Data dua</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </Content>
    </Container>
  )
}

export default connect(state => ({}))(CustomSidebarScreen);
