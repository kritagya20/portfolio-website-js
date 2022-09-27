console.log("Welcome to Spotify");
var audioElement = new Audio(`https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3`);
audioElement.play();
// var audioElement = new Audio(`TuJaneNa.mp3`);
// audioElement.play();

//Initialize the Variable 
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById("gif");
let songItems = Array.from.document.getElementsByClassName("songItem");

let songs =[
    {songName: "TuJaneNa" , filePath: "music/TuJaneNa.mp3", coverPath: "covers/1.jpg"},
    {songName: "TuJaneNa" , filePath: "music/TuJaneNa.mp3", coverPath: "covers/1.jpg"},
    {songName: "TuJaneNa" , filePath: "music/TuJaneNa.mp3", coverPath: "covers/1.jpg"},
    {songName: "TuJaneNa" , filePath: "music/TuJaneNa.mp3", coverPath: "covers/1.jpg"},
    {songName: "TuJaneNa" , filePath: "music/TuJaneNa.mp3", coverPath: "covers/1.jpg"},
    {songName: "TuJaneNa" , filePath: "music/TuJaneNa.mp3", coverPath: "covers/1.jpg"},
    {songName: "TuJaneNa" , filePath: "music/TuJaneNa.mp3", coverPath: "covers/1.jpg"},
    {songName: "TuJaneNa" , filePath: "music/TuJaneNa.mp3", coverPath: "covers/1.jpg"},
    {songName: "TuJaneNa" , filePath: "music/TuJaneNa.mp3", coverPath: "covers/1.jpg"},
    {songName: "TuJaneNa" , filePath: "music/TuJaneNa.mp3", coverPath: "covers/1.jpg"},
    {songName: "TuJaneNa" , filePath: "music/TuJaneNa.mp3", coverPath: "covers/1.jpg"},
    {songName: "TuJaneNa" , filePath: "music/TuJaneNa.mp3", coverPath: "covers/1.jpg"}

]

songItems.forEach((element)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].filePath;
})


//Handle Play Pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        gif.style.opacity = 0;
    }
})


//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration /100;
})











