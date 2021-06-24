import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function AnnotationForm({ selection, fullLine, songId, editButton }) {
    const [annotationText, setAnnotationText] = useState('')
    console.log(annotationText)
    console.log(selection, fullLine, songId, editButton)
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
