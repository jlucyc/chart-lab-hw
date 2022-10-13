import React, {useState, useEffect} from "react";
import SongList from "../Components/SongList";
import './SongContainer.css';

const SongContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
        }, [])

    const getSongs = function() {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
        
    }
  


    return (
        <div>
            <SongList songs={songs} />
        </div>
    )

}

export default SongContainer;



//     const [selectedMunro, setSelectedMunro] = useState(null);