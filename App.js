import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from './src/screens/ListScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen_withUseReducer';
// import CounterScreen from './src/screens/CounterScreen_withUseState';
import ColorScreen from './src/screens/ColorScreen';
import SquareColorScreen from './src/screens/SquareColorScreen_withUseReducer';
import TextScreen from './src/screens/TextScreen';
import BoxLayoutScreen from './src/screens/BoxLayoutScreen';

// Stack Navigator = objeto que decide qué debe renderizar en cualquier momento (Home, List, ...).
// Cuando SN renderiza un componente, le pasa como props una serie de configuration options.
// para que el componente sea visible en la pantalla, tenemos que añadirlo a createStackNavigator!!
// StackNavigator es un objeto que decide qué contenido vamos a mostrar en la pantalla en cualquier momento 
const navigator = createStackNavigator(
  {
    // todas las rutas a la que podemos navegar en nuestra app!!!
    // el primer param es el nombre de la ruta, que se usa luego para navegar (List, Home, ...)
    Home: HomeScreen,
    // Añadir aqui los componentes custom que hemos creado!!!
    Components: ComponentsScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    SquareColor: SquareColorScreen,
    Text: TextScreen,
    BoxLayout: BoxLayoutScreen
  },
  {
    initialRouteName: "Home", // el primer componente que se debe mostrar; puede ser cualquiera de los componentes creados (Home, Components: que sea exactamente el mismo nombre!!!)
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
