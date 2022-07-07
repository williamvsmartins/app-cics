import React, {Component, useState} from "react";
import {View, Text, Image, StyleSheet, Button, TouchableOpacity} from 'react-native'
import api from "../../Services/Api";


async function deleteRow (id, e){
  console.log(id)
   await api.delete(`/feedbacks/${id}`)
   .then(() => {
    alert("card deletado")})
  
} 

export default class Visita extends Component{

  constructor(props) {
    super(props);
    this.state = {clicked: false};

  }

  onTap = () => {
    this.setState({
        clicked: true
    });
    if (this.state.clicked){
      deleteRow(this.props.data.id)
    }
  }


  

  render() {
    const date = new Date().toLocaleTimeString();
    return(
          <View
              accessible
              accessibilityLabel={`${this.props.data.name} tocando a campainha.`}
              onPress={() => { this.onTap() }}
          >
            <Image style={styles.fotoVisita} source={{uri: this.props.data.screenshot}}></Image>
            <Text style={styles.nomeVisita}>{this.props.data.name} tocando a campainha</Text>
            <Text style={styles.nomeVisita}>{this.props.data.createdAt}</Text>
            <TouchableOpacity style={styles.button}
            
              title="Apagar"
              disabled={this.setState.clicked}
              onPress={(e) => deleteRow(this.props.data.id, e)}
            >
                <Text style={styles.ButtonText}> Apagar</Text>
            </TouchableOpacity>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {

  },
  nomeVisita: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  fotoVisita: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 30,
  },

  button: {
    elevation: 8,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: "#8257E5",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 35,
    width: 100
  },
  ButtonText:{
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})