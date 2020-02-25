import React, { useState } from "react";
import { Button, StyleSheet, View, Text } from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {

    return (
        <View>
            <Text>{color}</Text>
            {/* Si tengo un string interpolation, tengo que usar {} y `` */}
            <Button title={`Increase ${color}`} onPress={() => onIncrease()}/>
            <Button title={`Decrease ${color}`} onPress={() => onDecrease()}/>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ColorCounter;