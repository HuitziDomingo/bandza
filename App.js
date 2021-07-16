import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { Welcome, LogReg, GetStart } from './components'


const Stack = createStackNavigator()
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="getstart" component={GetStart} options={{title:""}} />
      <Stack.Screen name="logreg" component={LogReg} options={{title:""}} />
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



