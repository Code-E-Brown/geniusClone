import { csrfFetch } from './csrf';


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
