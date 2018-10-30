/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, Fragment} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Provider } from "react-redux";
import store from './src/redux/store'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Dashboard from '../andre/src/containers/DashBoard'
import Search from '../andre/src/containers/Search'
import PokemonDetail from '../andre/src/components/PokemonDetail'

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <BottomNav/>
        </Fragment>
      </Provider>
    );
  }
}

const homeStackNav = createStackNavigator(
  {
  Home: 
    {
      screen: Dashboard,
      navigationOptions: () => ({
        headerTitle: (
          <View style={styles.nav}>
            <Image
              source={{uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'}}
              style={styles.image}
            />
          </View>
        ),
        title: `Home`,
        headerBackTitle: 'A much too long text for back button from B to Home',
        headerTruncatedBackTitle: `Home`
      }),
    },
  PokemonDetail,
  },
)

const searchStackNav = createStackNavigator(
  {
  Seach: 
    {
      screen: Search,
      navigationOptions: () => ({
        headerTitle: (
          <View style={styles.nav}>
            <Image
              source={{uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'}}
              style={styles.image}
            />
          </View>
        ),
        title: `Search`,
        headerBackTitle: 'A much too long text for back button from B to Home',
        headerTruncatedBackTitle: `Search`
      }),
    },
  PokemonDetail,
},
)

const BottomNav =  createBottomTabNavigator(
  {
    Home: {screen: homeStackNav},
    Search: {
      screen: searchStackNav,
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
      },
      style: {
        backgroundColor: 'firebrick'
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: 50,
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 40,
    marginLeft: 15,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  nav: {
    width: '100%',
    height: '100%',
    backgroundColor: 'firebrick',
    justifyContent: 'center'
  }
});
