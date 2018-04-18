/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// This file contains the landing screen implementation
// Author: Shripada
// Created On: 18 Apr 2018
// Modified on: 18 Apr 2018

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import RootNavigation from './app/config/routes';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <RootNavigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
