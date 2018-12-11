import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput} from 'react-native';

class MovieList extends Component {
    
    render() {
        return (
           <>
            {this.props.movies.map(movie => {
                return (
                    <View key={movie._id} style={styles.container}>
                        <Text>{movie.title}oo</Text>
                    </View>
                )
            })}
           </>
        );
    }
}


export default MovieList;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderColor:'brown',
      borderWidth:1,
      width:'80%',
      alignItems: 'center',
      margin: 10
    }
  });