import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from './common/Color';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header : {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.mainBlue,
    alignItems: 'center',
    justifyContent: "center",
  },
  headerTitle : {
    color: Color.white,
    fontSize: 18,
    // fontWeight: '600'
    fontFamily: 'helvetica-bold'
  }
});

export default Header;