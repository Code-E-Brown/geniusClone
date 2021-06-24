import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AnnotationForm from './AnnotationForm'
import { getOneSong } from '../../store/songs';
import { useDispatch } from 'react-redux';
import { createAnnotation } from '../../store/annotations';

function AnnotationFormModal({ selection, fullLine, songId }) {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const editButton = async (e) => {
        e.preventDefault();
        songId = +songId
        const testAnnotation = 'This is an annotation test'
        const data = {
            selection,
            fullLine,
            songId,
            testAnnotation
        }
        console.log('this is your payload', data)

        if (data) {
            const newAnnotation = await dispatch(createAnnotation(data))
            await dispatch(getOneSong(songId))
            // setReloader(!reloader)
            console.log(newAnnotation)
        }
    }

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AnnotationForm editButton={editButton} selection={selection} fullLine={fullLine} songId={songId} />
                </Modal>
            )}
        </>
    );
}

export default AnnotationFormModal;
