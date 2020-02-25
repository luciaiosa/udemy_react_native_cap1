import React, { useState } from 'react';
// useState es un hook (función que añade funcionalidades nuevas al componente tipo function)
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    // el state se usa para que el componente se renderice de nuevo si ese estado haya cambiado. Si no se usa state, sino cualquier var, el componente no se vuelve a renderizar!!!
    // esto no funciona!!
    // let counter = 0;

    // [counter, setCounter] = array destructuring (sacar algunos elementos o referencias a elementos fuera del array)
    // counter va a ser el estado que se va a  cambiar
    // setCounter = función que cambia el estado. Cuando se llama esta función, el componente entero se vuelve a renderizar!!
    // se le pasa a useState el valor por defecto del counter. Se usa useState para inicializar un nuevo state
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button title='Increase' onPress={() => {
                // BAD
                // counter++;
                // GOOD
                setCounter(counter + 1);
            }} />
            <Button title='Decrease' onPress={() => {
                // BAD
                // counter--;
                // GOOD
                setCounter(counter - 1);
            }} />
            <Text style={style.text}>Current count: {counter}</Text>
        </View>
    )
};

const style = StyleSheet.create({
    text: {
        fontSize: 40
    }
})

export default CounterScreen;