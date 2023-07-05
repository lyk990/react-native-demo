import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Image,
} from 'react-native';

import Home from './src/modules/Home';
import icon_add from './src/assets/icon_add.png';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Home />
      <Image source={icon_add} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
});

export default App;
