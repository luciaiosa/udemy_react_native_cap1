import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

  return (
    <View>
      {/* score={9} = solo el string se escribe con "", el resto entre {} !!! */}
      <ImageDetail title="FOREST" imageSource={require('../../assets/forest.jpg')} score={9}/>
      <ImageDetail title="BEACH" imageSource={require('../../assets/beach.jpg')}  score={7}/>
      <ImageDetail title="MOUNTAIN" imageSource={require('../../assets/mountain.jpg')}  score={10}/>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default ImageScreen;
