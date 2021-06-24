import { csrfFetch } from './csrf';
const GET_ANNOTATIONS = 'song/annotations'

const singleSongAnnotations = (annotations) => ({
    type: GET_ANNOTATIONS,
    annotations,
})

export const getAnnotationsForSong = (payload) => async dispatch => {
    const response = await csrfFetch()
}



export const createAnnotation = (payload => async dispatch => {
    const response = await csrfFetch(`/api/songs/${payload.songId}/annotations`, {
        method: "POST",
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        let json = await response.json()
        console.log(json)
    }

})
