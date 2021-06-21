import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

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

    return (
        <div className='addSong__form'>
            <h1>Add Song</h1>
            <h2>Primary info</h2>
            <form onSubmit={submitButton}>
                <div>
                    <label htmlFor='by'>By</label>
                    <input
                        onChange={(e) => setBy(e.target.value)}
                        id='by' value={by} type='text' placeholder='The primary artist, author, creator, etc.'></input>
                </div>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input id='title'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} type='text' placeholder='Title'></input>
                </div>
                <div>
                    <label>Primary Tag
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
                    </label>
                </div>
                <div>
                    <label htmlFor='lyrics'>Lyrics</label>
                    <textarea
                        onChange={(e) => setLyrics(e.target.value)}
                        value={lyrics} id="lyrics"
                        rows="20" cols="40">
                    </textarea>
                </div>
                <h3>
                    Optional:
                </h3>
                <div>
                    <label htmlFor='albumImage'>Album Image URL:</label>
                    <input value={albumImage}
                        onChange={(e) => setAlbumImage(e.target.value)}
                        id='albumImage' type='text'></input>
                </div>
                <div>
                    <label htmlFor='youtubeLink'>Youtube URL:</label>
                    <input value={youtubeLink}
                        onChange={(e) => setYoutubeLink(e.target.value)}
                        id='youtubeLink' type='text'></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
