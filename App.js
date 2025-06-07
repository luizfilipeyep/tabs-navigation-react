import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './src/pages/Home'
import Contato from './src/pages/Contato'
import Sobre from './src/pages/Sobre'

import Feather from "react-native-vector-icons/Feather"

const tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen 
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Início",
            tabBarIcon: ({color, size}) => {
              return <Feather name="home" color={color} size={size}  />
            }
          }}
        />

        <tab.Screen 
          name="Sobre"
          component={Sobre}
          options={{
            tabBarLabel: "Sobre",
            tabBarIcon: ({color, size}) => {
              return <Feather name="file-text" color={color} size={size}  />
            }
          }}
        />

        <tab.Screen 
          name="Contato"
          component={Contato}
          options={{
            tabBarLabel: "Contato",
            tabBarVisible: false,
            tabBarIcon: ({color, size}) => {
              return <Feather name="phone-call" color={color} size={size}  />
            }
          }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
