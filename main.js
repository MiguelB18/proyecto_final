const audio = document.querySelector('audio'),
    songLength = document.getElementById('SongLength')
    currentTime = document.getElementById('CurrentSongTime')

const calculateTime = (secs) =>{
    const minutes =Math.floor(secs / 60),
        seconds =Math.floor(secs % 60),
        returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}}`;




}

const displayDuration = () =>{
    songLength.innerHTML = calculateTime(audio.duration);


}

if(audio.readyState >0){

    displayDuration();
    currentTime.innerHTML = calculateTime(audio.currentTime);
}else{
    audio.addEventListener('loadedmetadata',()=>{
        displayDuration();
     })
}

audio.ontimeupdate = function(){
    currentTime.innerHTML = calculateTime(audio.currentTime);
    setProgress();

}

function setProgress(){

    let percentage = (audio.currentTime / audio.duration) *100;
    document.querySelector('.progress').style.width = percentage + '%';
}

const playPause = document.getElementById('PlayPause')
    plus10 = document.getElementById('Plus10')
    plus10 = document.getElementById('Back10')

playPause.addEventListener('click', ()=>{
    if(audio.paused){
        playPause.src = 'pausa.png';
        audio.play();
     }else{
        playPause.src='play.png'
        audio.pause();
    }    
})






