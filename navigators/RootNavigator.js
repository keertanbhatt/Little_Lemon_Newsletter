import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen options={{ headerTitleAlign: 'center'}} name = "Welcome" component={WelcomeScreen}/>
      <Stack.Screen  options={{ headerTitleAlign: 'center'}} name = "Subscribe" component={SubscribeScreen}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;
