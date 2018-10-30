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
import styled from "styled-components";
import { connect } from "react-redux";
import { searchPokemon } from "../redux/action/pokemonAction";
import { PokemonCard } from "../components/PokemonCard";
import SearchPokemonData from '../components/SearchPokemonData'

const StyledView = styled.View`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: black;
  height: 100%;
`;
const StyledTextInput = styled.TextInput`
  background-color: white;
  width: 60%;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  margin-top: 10px;
`;

const StyledButton = styled.Text`
  color: black;
  background-color: #ffff;
  padding: 10px 20px;
  border-radius: 3px;
`;

const mapStateToProps = state => {
  return {
    search: state.pokemonReducer.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchPokemon: input => {
      dispatch(searchPokemon(input));
    }
  };
};

class SearchInput extends Component {
  state = {
    error: null,
    input: "",
    show: false
  };
  doSearch = () => {
    this.setState({
      show: true
    });
    this.props.searchPokemon(this.state.input);
  };
  render() {
    return (
      <ScrollView style={{ backgroundColor: "black" }}>
          <StyledTextInput
            onChangeText={input => this.setState({ input })}
            value={this.state.input}
          />
        <Button
          title="Search"
          style={{paddingTop: 10}}
          color="crimson"
          onPress={this.doSearch}
        />
        {this.state.show && <SearchPokemonData search={this.props.search} navigation={this.props.navigation}/>}
      </ScrollView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
