const initState = {
    pokemons: [],
    fireRed: [],
    xy: [],
    search: [],
    pokemon: null,
    isLoading: false,
    errorMessage: null
}

const pokemonReducer = (state=initState, action) => {
    switch (action.type) {
        case 'GET_DATA_REQUEST':
            console.log('daata request');
            return {
                ...state,
                isLoading: true
            }
        case 'GET_DATA_EMERALD':
            return {
                ...state,
                pokemons: action.payload,
            }
        case 'GET_DATA_FIRERED':
            return {
                ...state,
                fireRed: action.payload,
            }
        case 'GET_DATA_XY':
            return {
                ...state,
                xy: action.payload,
            }
        case 'GET_DATA_SEARCH':
        console.log('ini action',action.payload);
            return {
                ...state,
                search: action.payload,
            }
        case 'GET_DETAIL_DATA':
            return {
                ...state,
                pokemon: action.payload,
                isLoading: true
            }
        case 'GET_DATA_ERROR':
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default pokemonReducer