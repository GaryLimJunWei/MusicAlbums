import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetail';

class AlbumList extends Component {
  state = {albums: []};

  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetails key={album.title} album={album} />
    ));
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        <View>{this.renderAlbums()}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

export default AlbumList;
