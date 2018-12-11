import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, FlatList, Button , TextInput, Image, TouchableHighlight, ActivityIndicator} from 'react-native';
import { Icon } from 'native-base'
import CardList from '../components/CardList'
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

class Movies extends Component {

state = {
    movies: []
}


fetchMovies = () => {
    client.query({
    query: gql`
    query{
        movies{
         _id,
         title,
         poster_path,
         popularity,
         tag
       }
     }
    `,
    })
    .then(({data}) => {
        console.log(data)
        this.setState({movies: data.movies})
    })
    .catch(err => {
        console.log(err)
    });
}
componentDidMount(){
    this.fetchMovies()
}

  
  static navigationOptions = {
    headerLeft: <Icon name="menu" style={{paddingLeft: 10}} onPress={() => {props.screenProps.myDrawerNavigation.navigate('DrawerOpen')}} />,
    title: 'Movie List'
  }

  render() {
    return (    
      <CardList data={this.state.movies} navigate={this.props.navigation} />
    );
  }
}

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

export default Movies