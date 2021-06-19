import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './Home.css';

export const HomeIndex = () => {


    return (
        <>
            <section className='top-section__container'>
                <div className='top-section__news'>
                    <h1>News</h1>
                    <div>
                        This is where some news will go
                    </div>
                </div>
                <div className='top-section__photo' style={{ backgroundImage: "url('https://ichef.bbci.co.uk/news/640/cpsprodpb/17FC/production/_114404160_gettyimages-87146405.jpg')" }}>
                    {/* Album/Artist photo will go here */}
                </div>
            </section>
            <section className='bottom-section__container'>
                <div className='bottom-section__news'>
                    <h1>News1</h1>
                </div>
                <div className='bottom-section__news'>
                    <h1>News2</h1>
                </div>
                <div className='bottom-section__news'>
                    <h1>News3</h1>
                </div>
                <div className='bottom-section__news' id='lastInNews'>
                    <h1>News4</h1>
                </div>

            </section>
        </>
    );
}





            // <div className='top-section__div'>
            //     a
            // </div>
            // <div className='top-section__div'>
            //     b
            // </div>
            // <div className='top-section__div'>
            //     c
            // </div>
