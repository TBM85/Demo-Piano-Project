const notes = [
  {
    data_type: 68,
    sound: "assets/sounds/C.mp3",
    class: "white",
    value: "C",
    letter: "D"
  },
  {
    data_type: 82,
    sound: "assets/sounds/Cb.mp3",
    class: "black",
    value: "C#",
    letter: "R"
  },
  {
    data_type: 70,
    sound: "assets/sounds/D.mp3",
    class: "white",
    value: "D",
    letter: "F"
  },
  {
    data_type: 84,
    sound: "assets/sounds/Db.mp3",
    class: "black",
    value: "D#",
    letter: "T"
  },
  {
    data_type: 71,
    sound: "assets/sounds/E.mp3",
    class: "white",
    value: "E",
    letter: "G"
  },
  {
    data_type: 72,
    sound: "assets/sounds/F.mp3",
    class: "white",
    value: "F",
    letter: "H"
  },
  {
    data_type: 85,
    sound: "assets/sounds/Fb.mp3",
    class: "black",
    value: "F#",
    letter: "U"
  },
  {
    data_type: 74,
    sound: "assets/sounds/G.mp3",
    class: "white",
    value: "G",
    letter: "J"
  },
  {
    data_type: 73,
    sound: "assets/sounds/Gb.mp3",
    class: "black",
    value: "G#",
    letter: "I"
  },
  {
    data_type: 75,
    sound: "assets/sounds/A.mp3",
    class: "white",
    value: "A",
    letter: "K"
  },
  {
    data_type: 79,
    sound: "assets/sounds/Ab.mp3",
    class: "black",
    value: "A#",
    letter: "O"
  },
  {
    data_type: 76,
    sound: "assets/sounds/B.mp3",
    class: "white",
    value: "B",
    letter: "L"
  }
];

const keysContainer = document.querySelector('.keys');
const audiosContainer = document.querySelector('.audios');

const appearKeys = () => {
  for (let note of notes) {
    const key = document.createElement('div');
    keysContainer.appendChild(key);
    key.classList.add('key', `${note.class}`);
    key.setAttribute('data-key', `${note.data_type}`);

    const keyLetter = document. createElement('h3');
    key.appendChild(keyLetter);
    keyLetter.classList.add('key-letter');
    keyLetter.innerHTML = `${note.letter}`;

    const keyTitle = document.createElement('h4');
    key.appendChild(keyTitle);
    keyTitle.classList.add('key-title');
    keyTitle.innerHTML = `${note.value}`;

    const audios = document.createElement('audio');
    audiosContainer.appendChild(audios);
    audios.setAttribute('data-key', `${note.data_type}`); 
    audios.setAttribute('src', `${note.sound}`); 

    playNotes(key, note);  
  }
}

// This function makes possible to handle what happens when a click occurs or a key is pressed
const playNotes = (key, note) => {

  // This function plays the audio
  const playAudio = (audio) => {
    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
  }

  //This function handles what happens when a key is pressed.
  const keydownHandler = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    playAudio(audio);

    // This function adds a "playing" class each time a key is pressed
    const keyDown = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    keyDown.classList.add('playing');
  };

  // This function handles what happens when a click occurs.
  const clickHandler = () => {
    const audio = document.querySelector(`audio[data-key="${note.data_type}"]`);  
    playAudio(audio);

    // This function adds a "playing" class each time a key is clicked
    const keyClick = document.querySelector(`.key[data-key="${note.data_type}"]`);
    keyClick.classList.add('playing');
  }

  // If a transformation is not occurring, remove the "playing" class
  const removeTransition = (e) => {
    if (e.propertyName !== "transform") return; //skip it if it's not a transform
    key.classList.remove('playing');
  }

  document.addEventListener('keydown', keydownHandler);
  key.addEventListener('click', clickHandler);
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}

appearKeys();