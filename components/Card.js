import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button , TextInput, Image, TouchableHighlight, ActivityIndicator} from 'react-native';
class Card extends Component {
    render() {
        return (
            <View style={styles.card} key={this.props.item._id}>    
                   <TouchableHighlight
                      style={styles.card} 
                      onPress={() => this.props.navigate.navigate(this.props.tv ? 'TvDetail':'MovieDetail', {movieId: this.props.item._id})}> 
                          <Image 
                            source={{uri: this.props.item.poster_path}}
                            style={{width: 250, height: 250, margin: 'auto', flex:1}} />
                    </TouchableHighlight>        
                    <Text style={styles.card} onPress={() => this.props.navigate.navigate(this.props.tv ? 'TvDetail' : 'MovieDetail', {movieId: this.props.item._id})} >{this.props.item.title}</Text> 
                    <Text>popularity: {this.props.item.popularity}</Text> 
            </View>
        );
    }
}

export default Card;

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