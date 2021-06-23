import { getOneArtist } from '../../store/artists';
import { NavLink, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ArtistDetails.css';

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
            <div className='outerBox'>
                <div className='artistDetails'>
                    <h1 className='artistName'>{artist.title}</h1>
                    <img className='artistImage' src={artist.image} alt="Artist Image" />
                    {/* <div className='artistImage' style={{ backgroundImage: `url(${artist.image})` }} /> */}

                </div >
                <div className='songsDiv'>
                    <h1>Songs:</h1>
                    <ul>
                        {artist.Songs &&
                            artist.Songs.map(song => (
                                <li key={song.id} >
                                    <NavLink to={`/songs/${song.id}`}>{song.title}</NavLink>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        );
    } else {
        return null;
    }
}
