/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import configureStore from './src/store'
import getStyleVars from './src/utils/styles/variables'

import { Text } from './src/elements'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const { store } = configureStore()
    const state = store.getState()

    const themeValue = state.theme.theme
    const theme = getStyleVars(themeValue)
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <View style={styles.container}>
            <Text>Welcome to React Native!</Text>
          </View>
        </ThemeProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
