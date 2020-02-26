import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    // state = object with the initial state: { counter: 0 }
    // action = object with the properties: type, and payload { type: 'increase' || 'decrease', payload: 1 }

    switch (action.type) {
        case 'increase':
            // Aunque en state solo haya { counter: 0 }, en el return devuelvo ...state y sobreescribo counter con el nuevo valor: counter - action.payload
            // pongo ...state por si acaso en un futuro añado más cosas al state, y no quiero que me devuelva solo una parte de este!!

            return { ...state, counter: counter + action.payload };
        case 'decrease':
            return { ...state, counter: counter - action.payload };
        default:
            return state;
    }
}

const CounterScreen = () => {

    // Al useReducer se le pasa por params la function reducer, y el state, con los valores por defecto!!!
    // { counter: 0 } es el state!!

    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return (
        <View>
            <Button title='Increase' onPress={() => dispatch({ type: 'increase', payload: 1 })} />
            <Button title='Decrease' onPress={() => dispatch({ type: 'decrease', payload: 1 })} />
            <Text style={style.text}>Current count: {state.counter}</Text>
        </View>
    )
};

const style = StyleSheet.create({
    text: {
        fontSize: 40
    }
})

export default CounterScreen;