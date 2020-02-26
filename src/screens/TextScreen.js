import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// SIEMPRE QUE USEMOS UN TextInput:
// TENEMOS QUE USAR EL STATE DEL PADRE PARA GUARDAR SU VALOR: const [name, setName] = useState("");
// Y PASARLE AL HIJO POR PROPS value={name} y onChangeText={(newValue) => setName(newValue)} !!!

const TextScreen = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
            <Text>Enter name:</Text>
            {/* TextInput no tiene casi nada de estilos, solo el height!!! Por eso a primera vista, no se ve. 
            Por eso, SIEMPRE AÑADIRLE ESTILO!!*/}

            {/* Hay dos props muy importantes que podemos añadir al input, ya que en IOS (no en Android) se cambia por defecto la primera letra introducida a mayuscula, y el autocorrector cambia por defecto las palabras mal escritas!!!: 
            - para que no se aplique el autocorrector: autoCorrect={false}. En caso de emails, passwords, userNames, no queremos que haya autocorrector (en IOS only) 
            - para que no se capitalize la primera letra: autoCapitalize="none". Las otras opciones son: characters, sentences, words.  
            Si el texto que estamos escribiendo es un blog, o una descripción, seguramente no quieramos poner estos props. */}
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                placeholder='Escribe tu nombre'
                // SIEMPRE pasarle dos props AL INPUT_TEXT para ver el valor del input, y cambiar su valor: value y onChangeText(), SINO NO VA A DEJAR CAMBIAR SU VALOR!!!
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            {/* Para añadir un mensaje de error en función de si un valor es válido o no, añadir entre {} una expresíon ternaria jsx que compruebe su validez 
            El mensaje de error será visible si la condición es true, sino devolverá null, es decir que no habrá mensaje de error */}
            { name.length < 5 ? <Text>El nombre debe tener al menos 5 caracteres</Text> : null }
            <Text>Name: {name}</Text>
            <Text></Text>

            <Text>Enter password:</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            { password.length < 5 ? <Text>El password debe tener al menos 5 caracteres</Text> : null }
            <Text>Password: {password}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        color: 'rgb(0, 45, 255)'
    }
})

export default TextScreen;