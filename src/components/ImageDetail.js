import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({imageSource, title, score}) => {

    return (
        <View>
            <Text>{title}</Text>
            {/* Image tiene como prop source, no src, como en HTML!! A este se le pasa la funcion require, con el param un path relativo!!! */}
            <Image source={imageSource}/>
            <Text>Image score - {score}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ImageDetail;
