import React from 'react';  // (hole library) how different components work together
import {Text, StyleSheet, View} from 'react-native';  // (some components) take some info from the components and use it to show some content on the mobile device

const ComponentsScreen = () => {
    const name= 'Lucia';
  
    return (
      <View>
        <Text style={styles.textStyle}>HomeScreen</Text>
        <Text style={styles.subHeaderStyle}>My name is {name}</Text>
      </View>
      )
  };
  
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: 30
    },
    subHeaderStyle: {
      fontSize: 45
    }
  });
  
  export default ComponentsScreen;