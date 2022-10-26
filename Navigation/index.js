 import { NavigationContainer  } from '@react-navigation/native';
 import * as React from 'react';
 import LoginScreen from '../screens/LoginScreen';
 import HomeScreen from '../screens/HomeScreen';
//  import Stack from './RouteConfigs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 export default function Navigation (props) {
   return (
     <NavigationContainer>
       <RootNavigator isLoggedIn={props.isLoggedIn} />
     </NavigationContainer>
   );
 }
 
const Stack = createNativeStackNavigator();

 function RootNavigator(props) {
   return (
        <Stack.Navigator initialRouteName={props.isLoggedIn ? 'routeHome' : 'routeLogin' } screenOptions={{headerShown: false}}>
            <Stack.Screen name='routeLogin' component={LoginScreen} />
            <Stack.Screen name='routeHome' component={HomeScreen} />
        </Stack.Navigator>
   );
 }
