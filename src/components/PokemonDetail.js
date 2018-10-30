import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import { getData } from "../redux/action/pokemonAction";
import { connect } from "react-redux";
import styled from "styled-components";
import { emeraldData } from "../redux/action/pokemonAction";

const StyledText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  justify-content: center;
  text-align: center;
`;
const SmallText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  font-style: italic;
`;

const mapStateToProps = state => {
  return {
    isLoading: state.pokemonReducer.isLoading
  };
};

class PokemonDetail extends Component {
  state = {
    loading: false,
    name: "",
    img: "",
    rarity: ""
  };
  componentDidMount() {
    console.log(this.props);
    const pokemonDetail = this.props.navigation.state.params.data;
    let stars = "";
    for (let i in pokemonDetail) {
      if (pokemonDetail.rarity == "Uncommon") {
        stars = "⭐️";
      } else if (pokemonDetail.rarity == "Common") {
        stars = "⭐️⭐️";
      } else if (pokemonDetail.rarity == "Rare") {
        stars = "⭐️⭐️⭐️";
      } else {
        stars = "⭐️⭐️⭐️";
      }
    }
    this.setState({
      loading: true,
      name: pokemonDetail.name,
      img: pokemonDetail.imageUrl,
      rarity: stars
    });
  }
  render() {
    console.log(this.props);
    const pokemonDetail = this.props.navigation.state.params.data;

    return (
      <ScrollView style={styles.detail}>
        {this.state.loading ? (
          <Fragment>
            <Image
              source={{ uri: this.state.img }}
              style={{
                height: 300,
                width: 355,
                resizeMode: "contain",
                alignContent: "center",
                justifyContent: "center"
              }}
            />
            <View>
              <View>
                <StyledText>{this.state.name}</StyledText>
                <SmallText>{this.state.rarity}</SmallText>
                <SmallText>Rarity: {pokemonDetail.rarity}</SmallText>
                <SmallText>Hp: {pokemonDetail.hp}</SmallText>
                <SmallText>type: {pokemonDetail.types[0]}</SmallText>
                <SmallText style={{ fontSize: 12 }}>
                  {pokemonDetail.supertype} - {pokemonDetail.subtype}
                </SmallText>
              </View>
              {pokemonDetail.ability ? (
                <View>
                  <SmallText style={{ fontSize: 15 , color: 'salmon'}}>
                    {pokemonDetail.ability.text}
                  </SmallText>
                </View>
              ) : null}
                {pokemonDetail.text ? (
                <View>
                  <SmallText style={{ fontSize: 13, color: 'salmon'}}>
                    {pokemonDetail.text[0]}
                  </SmallText>
                </View>
              ) : null}
            </View>
          </Fragment>
        ) : (
          <StyledText>Loading</StyledText>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  detail: {
    display: "flex",
    backgroundColor: "black",
    padding: 10,
    alignContent: "center"
  }
});

export default connect(
  mapStateToProps,
  null
)(PokemonDetail);
