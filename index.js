const sounds = ['ilikeuALOT', 'Mwah', 'NAUR', 'STHLLOOP', 'Take it off', 'Yeahyayaya'];


sounds.forEach(  (sound)=>{
    const btn = document.createElement("button")

    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener("click",()=>{
        stopSound()
        document.getElementById(sound).play()
     })

    document.getElementById("buttons").appendChild(btn)
}) 

function stopSound(){
    sounds.forEach((sound)=>{
        const track = document.getElementById(sound)
        track.pause();
        track.currentTime = 0;
   })
}