import React, { Component, Fragment } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  FlatList
} from "react-native";
import { PokemonCard } from '../components/PokemonCard'
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    search: state.pokemonReducer.search
  }
}

class SearchPokemonData extends Component {
  state = {
    notfound: false
  }
  render() {
    return (
        <Fragment>
          <ScrollView>
            <FlatList
                data={this.props.search}
                renderItem={({ item }) => (
                  <PokemonCard data={item} navigation={this.props.navigation} />
                )}
                keyExtractor={item => item.id}
              />
          </ScrollView>
        </Fragment>
    )
  }
}

export default connect(mapStateToProps, null)(SearchPokemonData)