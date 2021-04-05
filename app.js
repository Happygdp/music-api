const searchSong = () =>{
    const searchText = document.getElementById("search-field").value;
    const url = `https://api.lyrics.ovh/suggest/${searchText} ;`
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySongs(data.data))
}
function displaySongs (songs){
    const songContaniar = document.getElementById("song-container");
    songContaniar.innerHTML = '';

    songs.forEach(song => {
        
        const div = document.createElement('div');
        div.innerHTML = `<div class="single-result row align-items-center my-3 p-3">
                        <div class="col-md-9">
                            <h3 class="lyrics-name">${song.title}</h3>
                            <p class="author lead">Album by <span>${song.artist.name}</span></p>
                        </div>
                        
                        <audio controls>
                            <source src="${song.preview}" control type="audio/mpeg">
                            
                        </audio>
                        <div class="col-md-3 text-md-right text-center">
                            <button onclick = "getLyric('${song.title}', '${song.artist.name}')" class="btn btn-success">Get Lyrics</button>
                        </div>
                    </div>`;
        songContaniar.appendChild(div);
});
}

const getLyric = (title, artist) => {
   const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
   fetch(url)
   .then(res => res.json())
   .then(data => displayLyrics (data.lyrics))

   
}

const displayLyrics = lyrics => {
    const lyricsDiv = document.getElementById('song-lyrics')
    lyricsDiv.innerText = lyrics;

}



