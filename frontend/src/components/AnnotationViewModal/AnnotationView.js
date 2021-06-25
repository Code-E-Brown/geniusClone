import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";



function AnnotationView({ annotationId, annotations }) {
    // console.log(annotationId, annotations)
    let selectedAnnotation = annotations.find(annotation => annotation.id === annotationId)
    return (
        <div>{selectedAnnotation.body}</div>
    )
}
export default AnnotationView;
