import React from "react";


const listItem = ({song, chartPosition}) => {

    
    return <div class="box">
             <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>

    
           <div>{chartPosition + 1}</div>
            
           <div>{song["im:name"].label}</div>
           <div>{song["im:artist"].label}</div>
           
           <div> <img src={song["im:image"][1].label}></img></div>
           <div> <a href={song["link"][0]["attributes"]["href"]}>Play</a> </div>
           
            </div>
}

export default listItem;