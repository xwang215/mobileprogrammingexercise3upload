import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import MessageScreen from './src/screens/MessageScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Message Directory',
            headerStyle: {
              backgroundColor: '#6200EE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
        <Stack.Screen 
          name="Category" 
          component={CategoryScreen}
          options={({ route }) => ({ 
            title: route.params.categoryName,
            headerStyle: {
              backgroundColor: '#6200EE',
            },
            headerTintColor: '#fff',
          })}
        />
        <Stack.Screen 
          name="Message" 
          component={MessageScreen}
          options={{ 
            title: 'Message Details',
            headerStyle: {
              backgroundColor: '#6200EE',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}