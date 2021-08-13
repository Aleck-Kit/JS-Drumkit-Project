function playSound(e) { // you can select any attributes an element, not just class and id as shown above
    const audio = document.querySelector(`audio[data-key="${
        e.keyCode
    }"]`);

    // select the class connecting to some css
    const key = document.querySelector(`.key[data-key="${
        e.keyCode
    }"]`);

    if (! audio) 
        return;
     // stop the function from running altogether if a key with no audio is typed
    audio.currentTime = 0; // rewinds the audio for each keypress so you can play quick successive
    audio.play(); // play the sound when key is pressed
    key.classList.add('playing'); // add the css for yellow animation to the key

}

function removeTransition(e) {
    if (e.propertyName !== 'transform') 
        return;
     // skip if it's not a transform
    this.classList.remove('playing'); // removes the yellow border transform animation after the keydown
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
