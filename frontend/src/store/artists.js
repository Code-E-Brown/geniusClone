const LOAD = 'artists/LOAD'

const load = (artists) => ({
    type: LOAD,
    artists,
})

export const getArtists = () => async dispatch => {
    const response = await fetch('/api/artists')

    if (response.ok) {
        const artists = await response.json();
        await dispatch(load(artists))
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
