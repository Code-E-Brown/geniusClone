import { getOneSong } from '../../store/songs';
import { NavLink, Link, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SongComments } from '../SongComments';
import { createAnnotation } from '../../store/annotations';
export const SongDetails = () => {
    let { songId } = useParams();
    const dispatch = useDispatch();
    const song = useSelector(state => state.song[songId])
    const sessionUser = useSelector((state) => state.session.user);
    const [selection, setSelection] = useState('')
    const [fullLine, setFullLine] = useState('')
    // const [reloader, setReloader] = useState(false)


    useEffect(() => {
        // console.log(songId)
        dispatch(getOneSong(songId))
    }, [songId])

    // console.log(selection)
    // if (window.getSelection().toString()) {
    //     console.log(window.getSelection().toString())
    //     console.log('2', window.getSelection().focusNode.parentNode.parentNode) // this gets you <p>lyrics<p>
    // }

    // const selectionFunction = (e) => {
    //     e.preventDefault();
    //     let selected = window.getSelection().toString()
    //     setSelection(selected)
    // }
    // console.log(window.getSelection().focusNode.parentNode.parentNode) this is how to get the <div className lyrics>
    useEffect(() => {
        console.log(selection)
        if (selection) {
            // console.log('selections length:', selection.length)
            // console.log('inside mouse up:', selection)
            // console.log("full line:", window.getSelection().anchorNode.data)
            // console.log(window.getSelection().anchorNode.data.indexOf(selection))
            // console.log('editedFullString', window.getSelection().anchorNode.data.replace(selection, `<a>${selection}</a`))
            // // console.log('object.values', Object.values(window.getSelection().focusNode.parentNode.parentNode))
            // console.log(window.getSelection())
            setFullLine(window.getSelection().anchorNode.data)
        }
    }, [selection])

    const mouseUp = (e) => {
        setSelection(window.getSelection().toString())
    }

    const editButton = (e) => {
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
            dispatch(createAnnotation(data))
            // setReloader(!reloader)
        }
    }


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
                    {selection.length > 0 && sessionUser &&
                        <button onClick={editButton}>Edit</button>
                    }
                    <h3>Lyrics:</h3>
                    <div className='lyricsDivClass' onMouseUp={mouseUp} dangerouslySetInnerHTML={{ __html: song.lyrics }}></div>

                    {/* <div>{song.lyrics}</div> */}
                </div>
                <SongComments id={song.id} />
            </div>
        )
    } else {
        return null;
    }
}
