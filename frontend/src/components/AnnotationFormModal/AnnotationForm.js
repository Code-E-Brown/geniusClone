import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { getOneSong } from '../../store/songs';
import { createAnnotation } from '../../store/annotations';




function AnnotationForm({ selection, fullLine, songId, closeModal }) {
    const [annotationText, setAnnotationText] = useState('')

    // console.log(selection, fullLine, songId, editButton)
    // console.log(props)


    // const closeModal = () => {
    //     setShowModal(false)
    // }

    const dispatch = useDispatch();
    const editButton = async (e) => {
        e.preventDefault();
        songId = +songId

        const data = {
            selection,
            fullLine,
            songId,
            annotationText
        }
        console.log('this is your payload', data)

        if (data) {
            const newAnnotation = await dispatch(createAnnotation(data))
            await dispatch(getOneSong(songId))
            // setReloader(!reloader)
            console.log(newAnnotation)
            closeModal()
        }
    }


    return (
        <div className='modalDiv'>
            <form>
                <label >Annotation</label>
                <input onChange={e => setAnnotationText(e.target.value)} value={annotationText} type='text'></input>
            </form>
            <button onClick={editButton} type='submit'>Submit</button>
        </div>
    )
}

export default AnnotationForm;
