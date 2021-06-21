
export const AddSongPage = () => {

    return (
        <div className='addSong__form'>
            <h1>Add Song</h1>
            <h2>Primary info</h2>
            <form>
                <div>
                    <label htmlFor='by'>By</label>
                    <input id='by' type='text' placeholder='The primary artist, author, creator, etc.'></input>
                </div>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input id='title' type='text' placeholder='Title'></input>
                </div>
                <div>
                    <label>Primary Tag
                        <input
                            type='radio'
                            name='tag'
                        />Rap
                        <input
                            type='radio'
                            name='tag'
                        />Pop
                        <input
                            type='radio'
                            name='tag'
                        />R&B
                        <input
                            type='radio'
                            name='tag'
                        />Rock
                        <input
                            type='radio'
                            name='tag'
                        />Country
                        <input
                            type='radio'
                            name='tag'
                        />Non-Music
                    </label>
                </div>
                <div>
                    <label htmlFor='lyrics'>Lyrics</label>
                    <textarea id="lyrics"
                        rows="20" cols="40">
                    </textarea>
                </div>
                <h3>
                    Optional:
                </h3>
                <div>
                    <label htmlFor='albumImage'>Album Image URL:</label>
                    <input id='albumImage' type='text'></input>
                </div>
                <div>
                    <label htmlFor='youtubeLink'>Youtube URL:</label>
                    <input id='youtubeLink' type='text'></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
