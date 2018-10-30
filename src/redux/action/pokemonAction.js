import axios from 'axios'

export const emeraldData = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'GET_DATA_REQUEST'})
        axios({
            method: 'get',
            url: 'https://api.pokemontcg.io/v1/cards?setCode=ex9'
        })
        .then((result) => {
            dispatch({ type: 'GET_DATA_EMERALD', payload: result.data.cards})
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'GET_DATA_ERROR', payload: err.message})
        })
    }
}

export const fireRed = () => {
    return (dispatch, getState) => {
        let onlyPokemon = []
        axios({
            method: 'get',
            url: 'https://api.pokemontcg.io/v1/cards?setCode=ex6'
        })
        .then((result) => {
            let responseApi = result.data.cards
            for (let i in responseApi) {
                if (responseApi[i].supertype !== "Trainer") {
                    onlyPokemon.push(responseApi[i])
                }
            }
            dispatch({ type: 'GET_DATA_FIRERED', payload: onlyPokemon})
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'GET_DATA_ERROR', payload: err.message})
        })
    }
}

export const xy = () => {
    return (dispatch, getState) => {
        axios({
            method: 'get',
            url: 'https://api.pokemontcg.io/v1/cards?setCode=xy1'
        })
        .then((result) => {
            dispatch({ type: 'GET_DATA_XY', payload: result.data.cards})
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'GET_DATA_ERROR', payload: err.message})
        })
    }
}

export const searchPokemon = (input) => {
    return (dispatch, getState) => {
        axios({
            method: 'get',
            url: `https://api.pokemontcg.io/v1/cards?name=${input}`
        })
        .then((result) => {
            dispatch({ type: 'GET_DATA_SEARCH', payload: result.data.cards})
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'GET_DATA_ERROR', payload: err.message})
        })
    }
}
