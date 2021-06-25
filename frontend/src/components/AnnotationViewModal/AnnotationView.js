import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { getAnnotationsForSong } from "../../store/annotations";



function AnnotationView({ annotationId, annotations }) {
    // console.log(annotationId, annotations)
    const dispatch = useDispatch();
    let selectedAnnotation = annotations.find(annotation => annotation.id === annotationId)
    let currentSongId = annotations[0].songId
    // console.log("******", annotationId, annotations, currentSongId)
    useEffect(() => {
        dispatch(getAnnotationsForSong(currentSongId))
    }, [dispatch])
    
    return (
        <div className='annotationBox'>
            <div className='mostPopularAnnotation'>
                {selectedAnnotation.body}
            </div>
            <form>
                <label>Add another annotation!</label>
                <div>:</div>
                <textarea>
                </textarea>
                <button>Submit Annotation</button>
            </form>
            {/* <div>
                <div>
                    This is where other annotations will go
                </div>
                <div>
                    This is where other annotations will go
                </div>
                <div>
                    This is where other annotations will go
                </div>
            </div> */}
        </div>
    )
}
export default AnnotationView;
