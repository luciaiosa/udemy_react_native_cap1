import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
// View component = posiciona o agrupa multiples componentes dentro de el!

const HomeScreen = ({ navigation }) => {
  // { navigation } es el destructuring de props.navigation
  // props.navigator tiene por defecto (ya que se le pasa al createStackNavigator method, en App) actions (dismiss, pop, reset, ...), addListener, navigate, ...
  console.log(navigation);
  const name= 'Lucia';

  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
      {/* Button es un elemento selfclosed, y el valor/ texto se le pasa en title!! 
      props.navigation.navigate('Components') hace que navegue a la página ComponentsScreen. Todas las rutas de nuestra app están en App.js, dentro de createStackNavigator!!! */}
      <Button 
        title="Go to components demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button 
        title="Go to images page"
        onPress={() => navigation.navigate('Images')}
      />
      <Button 
        title="Go to counter page"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button 
        title="Go to color page"
        onPress={() => navigation.navigate('Color')}
      />
      <Button 
        title="Go to square color page"
        onPress={() => navigation.navigate('SquareColor')}
      />
      <Button 
        title="Go to text page"
        onPress={() => navigation.navigate('Text')}
      />
      <Button 
        title="Go to box layout page"
        onPress={() => navigation.navigate('BoxLayout')}
      />
      {/* TouchableOpacity NO es un elemento selfclosed. Dentro de el se colocan elementos que, al pulsarlos, TouchableOpacity detecta que han sido pulsados, y devuelve un onPress event
      No tiene estilo, como Button. Si tenemos varios elementos dentro de el, si pulso en uno, se pulsa en todos.
      Es muy util en caso de que queramos tener una imagen, y un texto dentro de el, y al pulsar en cualquiera, haga una cosa. */}
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to list demo</Text>
        <Text>Go to list demo 2</Text>
      </TouchableOpacity>
    </View>
    )
};

// Hay varias formas de aplicar estilos al componente, aparte de StyleSheet.create!!
// StyleSheet.create valida dinamicamente las reglas de estilos que estamos aplicando al elemento
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  subHeaderStyle: {
    fontSize: 45
  }
});

export default HomeScreen;
