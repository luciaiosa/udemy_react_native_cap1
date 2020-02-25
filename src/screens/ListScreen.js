import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
// FlatList turns a js object into an array of items. In React web it uses map()!!


const ListScreen = () => {

    // PRIMERA OPCIÓN PARA PONER key AL LISTADO: el objeto debe tener un key!!!

    // SIEMPRE HAY QUE PONER key en el listado para cada item. Sino, se borra todo el contenido de la página,
    //  y se vuelven a renderizar todos los items. Con key, sólo se renderiza/ borra el elemento con el key 
    //  seleccionado, y los siguientes, pero no los anteriores!!! EL KEY DEBE SER UN STRING, NO UN NUMERO!!!
    const friends = [
        { name: 'Friend #1', key: '1', age: 20 },
        { name: 'Friend #2', key: '2', age: 20 },
        { name: 'Friend #3', key: '3', age: 20 },
        { name: 'Friend #4', key: '4', age: 20 },
        { name: 'Friend #5', key: '5', age: 20 },
        { name: 'Friend #6', key: '6', age: 20 },
        { name: 'Friend #7', key: '7', age: 20 },
        { name: 'Friend #8', key: '8', age: 20 },
    ];

    //   FlatList ALWAYS RECEIVES TWO PROPS: data (an array with the data that we want to render) and renderItem (function that is going to be called with every element out of our array)
    return (
        // SEGUNDA OPCIÓN PARA PONER key AL LISTADO: añadir keyExtractor (funcion que devuelve un campo único, tipo tring!!) al FlatList component !!!
        // horizontal = el listado se coloca horizontalmente, con scroll horizontal
        // showsHorizontalScrollIndicator={false} = no muestra el scroll horizontal
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>Name: {item.name} - Age: {item.age}</Text>
                // element no es solo un item de la lista, sino un objeto que contiene el item, 
                // más el index del item en el array!! Para coger solo el item, uso el destructuring!!!
                // element === { item: { name: 'Friend #1'}, index: 0 }
            }} />
    );

    //   return <FlatList data={friends} renderItem={(element) => {
    //     // element === { item: { name: 'Friend #1'}, index: 0 }
    // }}/>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical: 20
    },
    subHeaderStyle: {
        fontSize: 45
    }
});

export default ListScreen;
