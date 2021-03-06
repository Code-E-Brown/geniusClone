import { getArtists } from "../../store/artists"
import { NavLink, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const ArtistsList = () => {

    const dispatch = useDispatch();
    const artists = useSelector(state => {
        return state.artists.list;
    })

    useEffect(() => {
        dispatch(getArtists())
    }, [])

    return (
        <div>
            <h1>Artists</h1>
            <ul>

                {artists.map(artist => (
                    <li key={artist.id}>
                        <NavLink to={`artists/${artist.id}`}>{artist.title}</NavLink>
                    </li>
                ))}
            </ul>
        </div >

    )
}
