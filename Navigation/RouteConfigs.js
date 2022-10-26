import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator({
    routeLogin: { screen: LoginScreen },
    routeHome: { screen: HomeScreen }
});

export default Stack;