import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import { MaterialIcons, Entypo, Ionicons} from '@expo/vector-icons';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AnimalsScreen from './assets/telas/Animalscreen';
import PlantsScreen from './assets/telas/Plantsscreen';
import AboutScreen from './assets/telas/Aboutscreen';

const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'#4caf50',
    accent:'#66bb6a',
    background:'#aed581',
    text:'#fff',
    disable:'#eeeeee',
  },
};

const Tab = createBottomTabNavigator();

export default function Ecotrip(){

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor='#66bb6a'/>
      <SafeAreaView style={{flex:1}}> 
      <NavigationContainer theme={theme}>
      <Tab.Navigator
            initialRouteName="Animals"
            tabBarOptions={{
              activeTintColor: '#fff',
              inactiveTintColor: '#e0e0e0',
              inactiveBackgroundColor:'#43a047',
              activeBackgroundColor:'#aed581',
            }}
          >
          <Tab.Screen 
            name="Plants" 
            component={PlantsScreen}
            options={{
              tabBarLabel:'Plantas',
              tabBarIcon:({color}) =>(
                <Entypo name={'leaf'} size={20} color={color} />
              ),
            }}
            />
          <Tab.Screen 
            name="Animals" 
            component={AnimalsScreen} 
            options={{
              tabBarLabel:'Animais',
              tabBarIcon:({color}) =>(
                <MaterialIcons name={'pets'} size={20} color={color} />
              ),
            }}/>
            <Tab.Screen 
            name="About" 
            component={AboutScreen} 
            options={{
              tabBarLabel:'Sobre',
              tabBarIcon:({color}) =>(
                <Ionicons name={'md-alert'} size={20} color={color} />
              ),
            }}/>
            
    </Tab.Navigator>
    </NavigationContainer>
      </SafeAreaView> 
  </PaperProvider>
  );
}