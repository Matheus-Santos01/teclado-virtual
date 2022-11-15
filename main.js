const keys = document.querySelectorAll('.key')

function playNote(event){
    
    let audioKeyCode = getKeyCode(event)

    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    const isKeyExists = key
    
    if(!isKeyExists){
        return
    }

    addPLayingClass(key)
    playAudio(audioKeyCode)

}

function addPLayingClass(key){
    key.classList.add('playing')

}

function removePLayingClass(event){
    event.target.classList.remove('playing')

}

function playAudio(audioKeyCode){

    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function getKeyCode(event){
    let keyCode
    const isKyboard = event.type === "keydown"
    if (isKyboard){
        keyCode = event.keyCode
    }else{
        keyCode = event.target.dataset.key
    }

    return keyCode
}

function registerEvents(){

    keys.forEach( function(key) {
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePLayingClass)
    })
    
    window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)