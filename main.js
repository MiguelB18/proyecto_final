import "./style.css"

fetch("https://leonardoapi.onrender.com/music")
.then (res=> res.json()) 
.then(res=>{

   const contenedor = document.getElementById("tracklist")

    res.map((cancion)=>{

        const contAudio = document.createElement("div")
        contAudio.classList.add("data-song")
        contAudio.innerHTML += `
                <img src="${cancion.path.front}" alt="" id="imgSong" class="imgSong1">
                <div class="text-song">
                    <h2 href= "title">${cancion.title}</h2>
                    <span class="artist">${cancion.author}</span>
                </div>
        `

        contAudio.addEventListener("click",()=>{
        document.getElementById("current-song-img").setAttribute("src",cancion.path.front)
        document.getElementById("current-song-title").innerHTML = cancion.title
        document.getElementById("current-song-author").innerHTML = cancion.author
        document.getElementById("sonido").setAttribute("src",cancion.path.audio)

        })


        contenedor.appendChild(contAudio)
    })




})



