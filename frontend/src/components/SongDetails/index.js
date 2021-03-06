import { getOneSong } from '../../store/songs';
import { NavLink, Link, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SongComments } from '../SongComments';
export const SongDetails = () => {
    const { songId } = useParams();
    const dispatch = useDispatch();
    const song = useSelector(state => state.song[songId])

    // console.log(song)

    useEffect(() => {
        // console.log(songId)
        dispatch(getOneSong(songId))
    }, [songId])
    if (song) {
        return (
            <div>
                <img src={song.imageUrl} />
                <h1>{song.title}</h1>
                <Link to={`/artists/${song.Artist.id}`}>
                    <h2>By: {song.Artist.title}</h2>
                </Link>

                <h3>Tag: {song.Tag.title}</h3>

                <a href={song.youtubeUrl}>
                    <h4>Listen on Youtube</h4>
                </a>

                <div>
                    <h3>Lyrics:</h3>
                    <div dangerouslySetInnerHTML={{ __html: song.lyrics }}></div>
                    {/* <div>{song.lyrics}</div> */}
                </div>
                <SongComments id={song.id} />
            </div>
        )
    } else {
        return null;
    }
}
