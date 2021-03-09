import React,{PureComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Search from './screens/search';
import Meaning from './screens/meaning';
import StarredWordPage from './screens/starList';

const Stack = createStackNavigator();
class Navigation extends PureComponent {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Home" component={Search} />
                    <Stack.Screen name="ShowMeaning" component={Meaning} />
                    <Stack.Screen name="StarredList" component={StarredWordPage} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigation;



//functional component
// function NavigationStack() {
//     return(
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
//                 <Stack.Screen name="Home" component={Search} />
//                 <Stack.Screen name="ShowMeaning" component={Meaning} />
//             </Stack.Navigator>
//         </NavigationContainer >
//     )
// }