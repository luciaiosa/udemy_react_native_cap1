import React, { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";

const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button title="Add a color" onPress={() => {
                // crea un nuevo array que contiene la copia de los datos del state, más el color devuelto en randomRGB
                setColors([...colors, randomRGB()])
            }} />

            {/* FlatList lista los elementos del array. Toma dos params: data (los datos a renderizar) y renderItem (la función que se ejecuta por cada item del array)!! 
            keyExtractor se usa para añadir la key para cada item */}
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={
                    ({ item }) => {
                        {/* Le añado estilo en linea porque el contenido se genera dinamicamente, todavía no sabemos el estilo que vamos a aplicarle */ }
                        return <View style={{ height: 100, width: 100, backgroundColor: item() }}></View>
                    }
                }
            />
        </View>
    )
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb($(red), $(green), $(blue))`;
}

const styles = StyleSheet.create({

});

export default ColorScreen;
