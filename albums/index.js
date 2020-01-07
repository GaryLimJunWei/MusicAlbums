/**
 * @format
 */

// Index.ios.js - place code in here for IOS !!!

// Import a library to help create a component
import React from 'react';
import {Text, AppRegistry, StyleSheet, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

const styles = StyleSheet.create({});

// Render it to the device
AppRegistry.registerComponent('albums', () => App);

// Default ==>

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
