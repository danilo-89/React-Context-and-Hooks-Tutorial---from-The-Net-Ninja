import React, { useState } from 'react';

const NewSongForm = ({addSong}) => {
    const [title, setTitle] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle("");
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Song name</label>
            <input 
            value = {title}
            type="text" 
            name="" 
            id="" 
            required 
            onChange={(e) => setTitle(e.target.value)} 
            />
            <input type="submit" value="add song" />
        </form>
     );
}
 
export default NewSongForm;