import React, {Component} from "react";
import {SafeAreaView, Text, Alert , FlatList, TouchableOpacity} from "react-native";
import {DefaultTheme,Card, Title, Paragraph, Button, Provider as PaperProvider, Searchbar} from 'react-native-paper';
import styles from '../styles/Bioma';

const DATA = require('../data/animais.json')

const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'#4caf50',
    accent:'#66bb6a',
    background:'#e8f5e9',
    text:'#fff',
    disable:'#eeeeee',
  },
};

export default class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      data: DATA
    };
    this.arrayholder = DATA;
  }

  renderHeader = () => {
    return (
      <PaperProvider theme={theme}>
        <Searchbar
        placeholder="Pesquise aqui..."
        placeholderTextColor='#fff'
        onChangeText={text => this.searchFilterFunction(text)}
        style={styles.procura}
      />
      </PaperProvider>
    );
  };

  searchFilterFunction = text => {    
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.nome.toUpperCase()}   
      ${item.subnome.toUpperCase()}`;
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    
    this.setState({ data: newData });  
  };

  render(){

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={this.state.data}
        renderItem={({item}) => {
    
          function inf(){
            Alert.alert(item.nome, item.info,[
              {
                text:'Esconder',
                style:'cancel'
              },
            ])
          }
          return(
          <PaperProvider theme={theme}>
          <Card style={styles.card}>
            <Card.Title/>
            <Card.Content>
              <Title style={styles.title}>{item.nome}</Title>
              <Paragraph style={styles.paragrafo}>{item.subnome}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: item.imagem }} />
            <Card.Actions>
              <TouchableOpacity onPress={()=>inf()}>
                <Button><Text style={styles.txtbtn}>Mais informações</Text></Button>
              </TouchableOpacity>
            </Card.Actions>
          </Card>
          </PaperProvider>);}}
        keyExtractor={(item) => item.nome}
        ListHeaderComponent={this.renderHeader}
      />
    </SafeAreaView>
  );
}
};