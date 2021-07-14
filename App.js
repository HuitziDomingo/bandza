/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
import {createStackNavigator} from '@react-navigation/stack'
import { Welcome } from './components'


const Stack = createStackNavigator()
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="welcome" component={Welcome} options={{title:""}} />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}



