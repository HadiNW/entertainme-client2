import React, { Component } from 'react';
import Card from './Card'
import { StyleSheet, Text, View, FlatList, Button , TextInput, Image, TouchableHighlight, ActivityIndicator} from 'react-native';
import axios from 'axios';

class CardList extends Component {
    render() {
        return (
            <View style={styles.cardList}>
          <FlatList
            data={this.props.data}
            renderItem={({item}) => {
              return (  
                <Card tv={this.props.tv} navigate={this.props.navigate} item={item} />
              )
            }}      
           />
          </View>
        );
    }
}

export default CardList;

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop: 0,
      marginLeft:10,
      marginRight:10,
      paddingVertical: 10,
    },

    card: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1, 
      marginBottom: 10
  },
  cardList: {
    marginTop: 20,
    marginBottom: 20
  }
});