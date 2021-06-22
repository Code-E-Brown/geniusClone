const LOAD = 'artists/LOAD'
const ADD_ONE = 'artists/ADD_ONE'

const load = (artists) => ({
    type: LOAD,
    artists,
})
const addOneArtist = (artist) => ({
    type: ADD_ONE,
    artist,
})

export const getArtists = () => async dispatch => {
    const response = await fetch('/api/artists')

    if (response.ok) {
        const artists = await response.json();
        await dispatch(load(artists))
    }

}

export const getOneArtist = (id) => async dispatch => {
    const response = await fetch(`/api/artists/${id}`)

    if (response.ok) {

        const artistDetails = await response.json();
        dispatch(addOneArtist(artistDetails))
    }
}

const initialState = { list: [] }

const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allArtists = {}
            // console.log(action)
            // console.log('look dood', action.artists.artists)
            action.artists.map(artist => {
                allArtists[artist.id] = artist;
            })
            return {
                ...allArtists,
                ...state,
                list: action.artists
            }
        }
        default:
            return state;
    }
}


export default artistsReducer;
