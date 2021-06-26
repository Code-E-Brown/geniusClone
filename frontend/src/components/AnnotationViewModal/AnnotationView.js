import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { getAnnotationsForSong } from "../../store/annotations";
import { getSubAnnotationsForSong } from '../../store/subAnnotations'
import { createSubAnnotation } from '../../store/subAnnotations'


function AnnotationView({ annotationId, annotations, closeModal }) {
    const [newAnnotationText, setNewAnnotationText] = useState('')
    // console.log(annotationId, annotations)
    const dispatch = useDispatch();
    let selectedAnnotation = annotations.find(annotation => annotation.id === annotationId)
    let currentSongId = annotations[0].songId
    const songAnnotationsWithInclude = useSelector(state => {
        return Object.values(state.annotations)
    })
    const subAnnotations = useSelector(state => {
        return Object.values(state.subAnnotations)
    })


    const primaryAnnotationWithUpvotes = songAnnotationsWithInclude.find(annotation => annotation.id === annotationId)

    // console.log("******", annotationId, annotations, currentSongId)
    useEffect(() => {
        dispatch(getAnnotationsForSong(currentSongId))
    }, [dispatch])

    useEffect(async () => {
        dispatch(getSubAnnotationsForSong(currentSongId, annotationId))
    }, [dispatch])
    // console.log(primaryAnnotationWithUpvotes)

    const submitButton = async (e) => {
        e.preventDefault()

        const data = {
            newAnnotationText
        }
        // console.log(data)
        await dispatch(createSubAnnotation(data, currentSongId, annotationId))
        closeModal()
        // if (data) {
        //     const newSubAnnotation = await dispatch(createSubAnnotation(data))
        // }
    }

    return (
        <div className='annotationBox'>
            <div className='mostPopularAnnotation'>
                {selectedAnnotation.body}
            </div>
            <form>
                <label>Add another annotation!</label>
                <div>:</div>
                <textarea value={newAnnotationText} onChange={e => setNewAnnotationText(e.target.value)}>
                </textarea>
                <button onClick={submitButton}>Submit Annotation</button>
            </form>
            <div>
                {subAnnotations && subAnnotations.map(annotation => (
                    <div key={annotation.id} > {annotation.body}</div>
                ))}
            </div>
        </div >
    )
}
export default AnnotationView;
