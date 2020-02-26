import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 30;

const reducer = (state, action) => {
    // state = object con el estado del componente { red: 0, green: 0, blue: 0 }
    // action = objeto que contiene el color a cambiar, y el valor: { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }

    switch (action.type) {
        // ALWAYS HAS TO RETURN SOME state!!! A new one, or the old one!!
        case 'change_red':
            // NEVER MODIFY THE STATE DIRECTLY!! NEVER DO state.red = state.red - 15 !!
            // make a new object that contains the state, with the color overriden by the new value!!
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload };
        default:
            return state;
    }
}

const SquareColorScreen = () => {
    // REFACTORIZADO USANDO REDUCERS!!

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    console.log(state);   // la primera vez: { red: 0, green: 0, blue: 0 }
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter
                color="Red"
                // Al dispatch se le pasa como param un objeto, el action, que debe tener type y payload
                onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
            />
            <ColorCounter
                color="Green"
                onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
            />
            <View style={{ height: 150, width: 150, justifyContent: "center", backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SquareColorScreen;
