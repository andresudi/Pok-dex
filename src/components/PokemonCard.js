import React, { Component, Fragment } from 'react'
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import PokemonDetail from './PokemonDetail'

export class PokemonCard extends Component {
    render() {
        return (
        <Fragment>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('PokemonDetail', {
            data: this.props.data});
        }}>
            <Image source={{uri: this.props.data.imageUrl}} style={{height: 450, width: 375, flex: 1,  resizeMode: 'contain', marginBottom: 10}}/>
            </TouchableOpacity>
        </Fragment>
        )
    }
}




