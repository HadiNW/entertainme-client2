import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

class MovieDetail extends Component {
    state = {
        movie: {}
    }

    componentDidMount() {
        this.getDetail()
     }
     
     fetchMovieDetail = (id) => {
        client.query({
            query: gql`
            query{
                findOneMovie(_id: "${id}") {
                  _id
                  title
                  poster_path
                  popularity
                  overview
                }
            }
            `,
            })
            .then(({data}) => {
                this.setState({movie: data.findOneMovie})
            })
            .catch(err => {
                console.log(err)
            });
     }
    
    getDetail = () => {
         const movieId = this.props.navigation.getParam('movieId')
         this.fetchMovieDetail(movieId)       
    }
 
    static navigationOptions = {
         title: 'Movie Detail'
    }

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <Image source={{uri: this.state.movie.poster_path}}
                    style={{width: 300, height: 300}} />
                    <View style={styles.container}>
                        <Text>{this.state.movie.title}</Text>
                        <Text  style={{marginBottom: 10}}>{this.state.movie.overview}</Text>
                    </View>
            </View> 
        </ScrollView> 
        );
    }
}

export default MovieDetail;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin:20
    },
  });