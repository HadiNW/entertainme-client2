import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, FlatList, Button , TextInput, Image, TouchableHighlight, ActivityIndicator} from 'react-native';
import { Icon } from 'native-base'
import CardList from '../components/CardList'
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

class Movies extends Component {
  
  static navigationOptions = {
    headerLeft: <Icon name="menu" style={{paddingLeft: 10}} onPress={() => {props.screenProps.myDrawerNavigation.navigate('DrawerOpen')}} />,
    headerRight: <Icon name="ios-camera-outline" style={{paddingRight: 10}}/>,
    title: 'TV List'
  }

  state = {
    tv: []
  } 


fetchTv = () => {
    client.query({
    query: gql`
    query{
        tv{
         _id,
         title,
         popularity,
         poster_path
       }
     }
    `,
    })
    .then(({data}) => {
        console.log(data)
        this.setState({tv: data.tv})
    })
    .catch(err => {
        console.log(err)
    });
}
componentDidMount(){
    this.fetchTv()
}

  render() {
    return (    
      <CardList tv={true} data={this.state.tv} navigate={this.props.navigation} />
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