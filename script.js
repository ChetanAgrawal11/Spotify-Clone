
let songs=[
    {songsname:"Its always Blue", filepath:"./items/songs/1.mp3",coverpath:"./items/covers/1.jpg"},
    {songsname:"Its always Blue", filepath:"./items/songs/2.mp3",coverpath:"./items/covers/1.jpg"},
    {songsname:"Its always Blue", filepath:"./items/songs/3.mp3",coverpath:"./items/covers/1.jpg"},
    {songsname:"Its always Blue", filepath:"./items/songs/4.mp3",coverpath:"./items/covers/1.jpg"},
    {songsname:"Its always Blue", filepath:"./items/songs/5.mp3",coverpath:"./items/covers/1.jpg"},
    {songsname:"Its always Blue", filepath:"./items/songs/6.mp3",coverpath:"./items/covers/1.jpg"},
    {songsname:"Its always Blue", filepath:"./items/songs/7.mp3",coverpath:"./items/covers/1.jpg"},
    {songsname:"Its always Blue", filepath:"./items/songs/8.mp3",coverpath:"./items/covers/1.jpg"},
   
]
var songindex=0;

var audioplaying=new Audio("./items/songs/1.mp3");

playingsong.addEventListener("click",e=()=>{
  
    if(audioplaying.paused || audioplaying.currentTime<=0){
        audioplaying.play();
        playingsong.src="./items/pause-solid.svg";
        dj.style.opacity=1;
        
        // songindex+1`play`.src="./items/pause-solid.svg";

    }else{
        audioplaying.pause();
        playingsong.src="./items/play-solid.svg";
        dj.style.opacity=0;
    }

})

forwardbutton.addEventListener("click",e=()=>{
    songindex++;
    if(songindex>7){
        songindex=0;
    }
   audioplaying.src=songs[songindex].filepath;
    audioplaying.play();
    dj.style.opacity=1;
})

backwardbutton.addEventListener("click",e=()=>{
    songindex--;
    if(songindex<0){
        songindex=7;
    }
   audioplaying.src=songs[songindex].filepath;
    audioplaying.play();
    dj.style.opacity=1;

})

audioplaying.addEventListener("timeupdate",e=()=>{
    console.log("hello");
    progress=parseInt((audioplaying.currentTime/audioplaying.duration)*100);
    rangebar.value=progress;

})
rangebar.addEventListener("change",e=()=>{
    range=(rangebar.value*audioplaying.duration)/100;
    audioplaying.currentTime=range;
})

