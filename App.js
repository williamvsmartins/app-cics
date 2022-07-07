
import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native';

import api from './src/Services/Api';
import Visita from './src/Pages/Visita';


export default class App extends Component{

  
  constructor(props){
    super(props);
    this.state = {
      visitas: []
    }
  }

  async componentDidMount(){
    const response = await api.get('/feedbacks');
    this.setState({
      visitas: response.data
    })
  }
 

  

  async componentDidUpdate(){
    const response = await api.get('/feedbacks');



    this.setState({
      visitas: response.data
    })
  }

  handleDelete = async id => {
    await api.delete(`/feedbacks/${id}`);

    this.setState({
      visitas: this.state.visitas.filter(file => file.id !== id)
    })
  }



  render(){
  
    return (
      
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.header}>
          <Text style={styles.textoHeader}>
            VISITAS RECENTES
          </Text>

        </View>
          

        
        <FlatList 
        onDelete={this.handleDelete}
        data={this.state.visitas}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Visita data={item}/>}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header:{
     backgroundColor: '#8257E5'
  },
  textoHeader:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 30
  }
});

