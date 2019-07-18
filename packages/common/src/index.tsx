import {observer} from 'mobx-react-lite';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Router} from './Router';

export const App = observer(() => {
  return (
    <View data-id="container" style={styles.container}>
      <View style={styles.wrapper}>
        <Router />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    width: 425,
    flex: 1,
  },
});
