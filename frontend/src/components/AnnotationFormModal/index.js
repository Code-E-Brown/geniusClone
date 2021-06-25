import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AnnotationForm from './AnnotationForm'
import { getOneSong } from '../../store/songs';
import { useDispatch } from 'react-redux';
import { createAnnotation } from '../../store/annotations';

function AnnotationFormModal({ selection, fullLine, songId }) {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <>
        
            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AnnotationForm closeModal={closeModal} selection={selection} fullLine={fullLine} songId={songId} />
                </Modal>
            )}
        </>
    );
}

export default AnnotationFormModal;
