import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';

const App = () => {
  return(
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  )
}

export default App;