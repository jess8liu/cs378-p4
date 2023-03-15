import './App.css';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Authenticate from './components/authenticate';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        Favorite Flowers
      </div>
      <View style={styles.container}>
        {
          <Authenticate>
          </Authenticate>
        }
      </View>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes: {
    width: '90%',
    fontSize: 18,
    padding: 12,
    borderColor: 'gray',
    borderWidth: 0.2,
    borderRadius: 10
  }
});

export default App;
