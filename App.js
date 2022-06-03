import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Setting from './Settings/Setting';
import Extensionandeconomicservice from './Extension/Extensionandeconomicservice';
import Bill from './Extension/Screens/Bill';
import Phonepayment from './Extension/Screens/Phonepayment';

export default class App extends Component {
  render() {
    return <Phonepayment/>;
  }
}

const styles = StyleSheet.create({});
