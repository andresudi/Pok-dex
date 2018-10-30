import React, { Component, Fragment } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { Provider } from "react-redux";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import styled from "styled-components";
import SearchInput from '../components/SearchInput'

export default class Search extends Component {

  render() {
    return (
        <Fragment>
          <SearchInput navigation={this.props.navigation}/>
        </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingTop: 50,
    fontWeight: "bold"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    backgroundColor: "red"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  image: {
    width: 100,
    height: 40,
    marginLeft: 15,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  nav: {
    width: "100%",
    height: "100%",
    backgroundColor: "firebrick",
    justifyContent: "center"
  }
});
