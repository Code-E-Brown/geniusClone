import { getOneArtist } from '../../store/artists';
import { NavLink, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const ArtistsDetails = () => {
    const { id } = useParams();
    console.log(id)
    const artist = useSelector(state => state.artists[id])
    console.log(artist)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOneArtist(id))
    }, [id]);

    return (
        <div>
            <h1>{artist.title}</h1>
            <img src={artist.image} alt="Artist Image" />
            <h2>Songs:</h2>
            {/* <ul>

            </ul> */}
        </div>
    );
}
