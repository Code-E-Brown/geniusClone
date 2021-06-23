import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

import './AddSongPage.css'

import { Editor, CustomToolbar, Final } from '../Quill';


export const AddSongPage = () => {

    const history = useHistory();
    const [by, setBy] = useState('')
    const [title, setTitle] = useState('')
    const [tag, setTag] = useState('')
    const [lyrics, setLyrics] = useState('')
    const [albumImage, setAlbumImage] = useState('')
    const [youtubeLink, setYoutubeLink] = useState('')

    const submitButton = (e) => {

        e.preventDefault()
        const data = {
            by,
            title,
            tag,
            lyrics,
            albumImage,
            youtubeLink
        }
        console.log(data)
    }

    let newLyrics = lyrics.replace(/^(")(")$/, '')


    return (
        <div className='addSong__form'>
            <h1>Add Song</h1>
            <h2>Primary info</h2>
            <form onSubmit={submitButton}>
                <div className='formBlock'>
                    <label htmlFor='by'>By:</label>
                    <input className='normalInput'
                        onChange={(e) => setBy(e.target.value)}
                        id='by' value={by} type='text' placeholder='The primary artist, author, creator, etc.'></input>
                </div>
                <div className='formBlock'>
                    <label htmlFor='title'>Title:</label>
                    <input className='normalInput' id='title'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} type='text' placeholder='Title'></input>
                </div>
                <label className='tagLabel'>Primary Tag</label>
                <div className='radioDiv'>
                    {/* <label className='radioLabel'>Primary Tag: */}
                    <input
                        onChange={(e) => setTag(e.target.value)}
                        type='radio'
                        name='tag'
                        value='rap'
                    />Rap
                    <input
                        onChange={(e) => setTag(e.target.value)}
                        type='radio'
                        name='tag'
                        value='pop'
                    />Pop
                    <input
                        onChange={(e) => setTag(e.target.value)}
                        type='radio'
                        name='tag'
                        value='r&b'
                    />R&B
                    <input
                        onChange={(e) => setTag(e.target.value)}
                        type='radio'
                        name='tag'
                        value='rock'
                    />Rock
                    <input
                        onChange={(e) => setTag(e.target.value)}
                        type='radio'
                        name='tag'
                        value='country'
                    />Country
                    <input
                        onChange={(e) => setTag(e.target.value)}
                        type='radio'
                        name='tag'
                        value='gospel'
                    />Gospel
                    <input
                        onChange={(e) => setTag(e.target.value)}
                        type='radio'
                        name='tag'
                        value='other'
                    />Other
                    {/* </label> */}
                </div>
                {/* <div>
                    <label htmlFor='lyrics'>Lyrics</label>
                    <textarea
                        onChange={(e) => setLyrics(e.target.value)}
                        value={lyrics} id="lyrics"
                        rows="20" cols="40">
                    </textarea>
                </div> */}
                <div className='quillBlock'>
                    <label className='tagLabel'>Lyrics</label>
                    {/* <Editor className="quill" onChange={(e) => setLyrics(e)} value={lyrics} /> */}
                    <Editor lyrics={lyrics} setLyrics={setLyrics} />
                    {/* <ReactQuill className="quill" onChange={(e) => setLyrics(e)} value={lyrics} /> */}
                </div>
                <div contentEditable='true' dangerouslySetInnerHTML={{ __html: lyrics }}>

                </div>
                <div className='addSong__lowerSection'>
                    <h3 className='tagLabel'>
                        Optional:
                    </h3>
                    <div className='formBlock'>
                        <label htmlFor='albumImage'>Album Image URL:</label>
                        <input className='normalInput' value={albumImage}
                            onChange={(e) => setAlbumImage(e.target.value)}
                            id='albumImage' type='text'></input>
                    </div>
                    <div className='formBlock'>
                        <label htmlFor='youtubeLink'>Youtube URL:</label>
                        <input className='normalInput' value={youtubeLink}
                            onChange={(e) => setYoutubeLink(e.target.value)}
                            id='youtubeLink' type='text'></input>
                    </div>
                    <div>
                        <button className='formButton' type='submit'>Submit</button>
                    </div>
                </div>

            </form>
        </div>
    )
}
