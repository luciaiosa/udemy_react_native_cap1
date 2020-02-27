import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxLayoutScreen = () => {
    return (
        // <View style={styles.viewBoxObjectModelStyle}>
        //     <Text style={styles.textBoxObjectModelStyle}>Layout</Text>
        // </View>
        // <View style={styles.viewFlexStyle}>
        //     <Text style={styles.textFlexStyle1}>Child #1</Text>
        //     <Text style={styles.textFlexStyle2}>Child #2</Text>
        //     <Text style={styles.textFlexStyle3}>Child #3</Text>
        // </View>
        <View style={styles.viewParentStyle}>
            <View style={styles.viewChildOneStyle} />
            <View style={styles.viewTwoParent} >
                <View style={styles.viewChildOTwoStyle} />
            </View>
            <View style={styles.viewChildThreeStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewParentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    // Otra opción para desplazar el segundo hijo para abajo: poner el segundo hijo dentro de un view parent (con justifyContent: 'flex-end')
    viewTwoParent: {
        justifyContent: 'flex-end'
    },
    viewChildOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewChildOTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        // para dezplazar el segundo hijo para abajo, hay varias opciones:
        // marginTop: 50,
        // alignSelf: 'flex-end',
        // top: 50
    },
    viewChildThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    },

    viewBoxObjectModelStyle: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 30 // margin: top, right, bottom, left
    },
    textBoxObjectModelStyle: {
        borderColor: 'red',
        borderWidth: 1,
        marginVertical: 20, // margin-top y margin-bottom
        marginHorizontal: 20 // margin-left y margin-right
    },
    viewFlexStyle: {  // EN EL PADRE!! alignItems, flexDirection, justifyContent
        alignItems: 'center',  // || flex-start || flex-end || stretch (por defecto: coge todo el ancho horizontal posible de la pantalla)
        // flexDirection: 'row',  // || column (por defecto)
        justifyContent: 'center',  // || flex-start (por defecto) || flex-end || space-between || space-around
        height: 200,
        borderWidth: 3,
        borderColor: 'black'
    },
    textFlexStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // height: 100
    },
    textFlexStyle1: { // EN EL HIJO!! flex, alignSelf
        borderWidth: 3,
        borderColor: 'red',
        flex: 1,  // coge todo el espacio vertical posible
        alignSelf: 'center' // || 
    },
    textFlexStyle2: {
        borderWidth: 3,
        borderColor: 'blue',
        // flex: 1,  // Si hay más de uno, el espacio se reparte de manera igual entre los que tienen flex: 1, y los que no, cogen el espacio que necesitan
        // position: "absolute",  // el resto de hermanos ocupan todo el espacio, este se coloca encima. Obeys flex rules set by the parent (menos alignItems: stretch)!!!
        fontSize: 18,
        // top: 10  // || bottom || right || left (se mueve 10 unidades para abajo / arriba / derecha / izquierda. Se coloca encima del hermano que tenga debajo!!!)

        // IMPORTANTE!! para que este componente ocupe toda la pantalla: absolute fill!! Es decir, hay que ponerle position: 'absolute', y top, right, bottom, left, todo a 0!!!
        // position: 'absolute',
        // top: 0,
        // right: 0,
        // left: 0,
        // bottom: 0,

        // LO DE ARRIBA (LAS 5 PROPIEDADES) SON LO MISMO EN REACT A:
        ...StyleSheet.absoluteFillObject
    },
    textFlexStyle3: {
        borderWidth: 3,
        borderColor: 'green',
        // alignSelf: 'flex-end' // || center || flex-start = sobreescribe el alignItems del padre
    }

})

export default BoxLayoutScreen;