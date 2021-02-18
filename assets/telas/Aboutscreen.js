import React from "react";
import { StyleSheet, View, Image, ImageBackground} from "react-native";
import {DefaultTheme, Title, Paragraph, Text, Provider as PaperProvider} from 'react-native-paper';
import logo from '../logo.png';
import bg from '../bg.png';

const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'#4caf50',
    accent:'#66bb6a',
    background:'#e8f5e9',
    text:'#1b5e20',
    disable:'#eeeeee',
  },
};

export default function App (){

  return (
    <PaperProvider theme={theme}>
      <ImageBackground source={bg} style={styles.bg}>
      <View style={styles.container}>
      <Title style={styles.title}>EcoTrip</Title>
      <Image source={logo} style={styles.imagem}/>
        <Paragraph style={styles.paragrafo}>Aplicativo de uso não comercial</Paragraph>
        <Text style={styles.texto}>
          O EcoTrip tem como objetivo te ajudar a conhecer um pouco da fauna e da flora brasileira.
        </Text>
      </View>
      </ImageBackground>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    top:50,
  },
  imagem:{
    width:95,
    height:109,
    alignSelf:'center'
  },
  bg:{
    width:"100%",
    height:"100%",
    alignItems:'center'
  },
  title: {
    alignSelf:'center',
    fontSize: 30,
    marginTop:50
  },
  texto:{
    alignSelf:'center',
    left:10,
    top:200  
  },
  paragrafo:{
    alignSelf:'center',
  }
});