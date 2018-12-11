import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput} from 'react-native';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import MovieList from '../components/MovieList';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

class AddMovie extends Component {
    state = {
        title:'',
        overview:'',
        poster_path:'',
        popularity: '',
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

    componentDidMount() {
        this.fetchMovies()
    }

    submitMovie = () => {
        client.mutate({
            mutation: gql`
            mutation{
                createMovie(
                    title: "${this.state.title}",
                    poster_path: "${this.state.poster_path}",
                    overview: "${this.state.overview}",
                    popularity: "${this.state.popularity}"
                ){
                    title
                    poster_path
                    overview
                }
            }`,
            fetchPolicy:'no-cache'
        })
        .then(({data}) => {
            console.log(data)
            this.setState({
                title:'',
                overview:'',
                poster_path:'',
                popularity: '',
            })
            this.fetchMovies()
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <>
            <View style={styles.container}>
                <Text>{this.state.popularity}</Text>
                <Text>Form Movie</Text>
                <TextInput 
                    style={styles.input} placeholder="title" 
                    onChangeText={(e) => this.setState({title: e})}
                    value={this.state.title}/>
                <TextInput 
                    style={styles.input} 
                    placeholder="Over View"
                    onChangeText={e => this.setState({overview: e})}
                    value={this.state.overview}/>
                <TextInput 
                    style={styles.input} 
                    placeholder="Poster Path"
                    onChangeText={e => this.setState({poster_path: e})}
                    value={this.state.poster_path}/>
                <TextInput 
                    style={styles.input} 
                    placeholder="Popularity"
                    onChangeText={e => this.setState({popularity: e})}
                    value={this.state.popularity}/>
                <Button title="Submit data" onPress={this.submitMovie}/>
            </View>
            
            <ScrollView style={{flex:1}}>
              <MovieList movies={this.state.movies}/>
            </ScrollView>   
            </>
        );
    }
}

export default AddMovie;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin:20
    },
    input: {
        borderColor: 'aqua',
        width:'80%',
        height:30,
        borderWidth:1,
        margin:5
    }
  });