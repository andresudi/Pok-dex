import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { emeraldData, fireRed, xy } from "../redux/action/pokemonAction";
import { connect } from "react-redux";
import { PokemonCard } from "../components/PokemonCard";
import PokemonDetail from "../components/PokemonDetail";

const mapStateToProps = state => {
  return {
    pokemons: state.pokemonReducer.pokemons,
    fireRed: state.pokemonReducer.fireRed,
    xy: state.pokemonReducer.xy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    emeraldData: () => dispatch(emeraldData()),
    fireRedData: () => dispatch(fireRed()),
    xyData: () => dispatch(xy())
  };
};

class DashBoard extends Component {
  componentDidMount = () => {
    this.props.emeraldData();
    this.props.fireRedData();
    this.props.xyData();
    console.log(this.props);
  };

  render() {
    return (
      <Fragment>
        {this.props.pokemons.length > 0 &&
        this.props.fireRed.length > 0 &&
        this.props.xy.length > 0 ? (
          <ScrollView style={{ backgroundColor: "black" }}>
            <Text style={styles.swipeLeft}>Swipe Left!</Text>
            <Text style={styles.tosee}>too see more cards</Text>
            <Text style={styles.welcome}>Pokemon Emerald</Text>
            {this.props.pokemons && (
              <FlatList
                data={this.props.pokemons}
                horizontal={true}
                renderItem={({ item }) => (
                  <PokemonCard data={item} navigation={this.props.navigation} />
                )}
                keyExtractor={item => item.id}
              />
            )}

            <Text style={styles.fire}>Pokemon Fire Red</Text>
            {this.props.fireRed && (
              <FlatList
                data={this.props.fireRed}
                horizontal={true}
                renderItem={({ item }) => (
                  <PokemonCard data={item} navigation={this.props.navigation} />
                )}
                keyExtractor={item => item.id}
              />
            )}

            <Text style={styles.xy}>Pokemon XY</Text>
            {this.props.xy && (
              <FlatList
                data={this.props.xy}
                horizontal={true}
                renderItem={({ item }) => (
                  <PokemonCard data={item} navigation={this.props.navigation} />
                )}
                keyExtractor={item => item.id}
              />
            )}
          </ScrollView>
        ) : (
          <View style={[styles.container, styles.horizontal, styles.warna]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 50,
    fontWeight: "bold"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "forestgreen",
    marginBottom: 10,
    color: "white"
  },
  fire: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    backgroundColor: "crimson",
    marginBottom: 10,
    color: "white"
  },
  xy: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    backgroundColor: "dodgerblue",
    marginBottom: 10,
    color: "white"
  },
  swipeLeft: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    marginTop: 5
  },
  tosee: {
    fontSize: 20,
    textAlign: "center",
    color: "salmon",
    fontStyle: "italic"
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
    resizeMode: "contain"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  warna: {
    backgroundColor: "black"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
