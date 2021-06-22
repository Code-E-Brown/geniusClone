import { getOneArtist } from '../../store/artists';
import { NavLink, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const ArtistsDetails = () => {
    const { id } = useParams();
    console.log(id)
    const dispatch = useDispatch()

    const artist = useSelector(state => state.artists[+id])
    useEffect(() => {
        dispatch(getOneArtist(id))
    }, [id]);

    if (artist) {

        return (
            <div>
                <h1>{artist.title}</h1>
                <img src={artist.image} alt="Artist Image" />
                <h2>Songs:</h2>
                <ul>
                    {artist.Songs &&
                        artist.Songs.map(song => (
                            <li key={song.id} >
                                <NavLink to={`/songs/${song.id}`}>{song.title}</NavLink>
                            </li>
                        ))}
                </ul>

            </div >
        );
    } else {
        return null;
    }
}
