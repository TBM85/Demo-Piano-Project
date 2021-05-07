const notes = [
  {
    data_type: 68,
    sound: "sounds/C.mp3",
    class: "white",
    value: "C",
    letter: "(D)"
  },
  {
    data_type: 82,
    sound: "sounds/Cb.mp3",
    class: "black",
    value: "C#",
    letter: "(R)"
  },
  {
    data_type: 70,
    sound: "sounds/D.mp3",
    class: "white",
    value: "D",
    letter: "(F)"
  },
  {
    data_type: 84,
    sound: "sounds/Db.mp3",
    class: "black",
    value: "D#",
    letter: "(T)"
  },
  {
    data_type: 71,
    sound: "sounds/E.mp3",
    class: "white",
    value: "E",
    letter: "(G)"
  },
  {
    data_type: 72,
    sound: "sounds/F.mp3",
    class: "white",
    value: "F",
    letter: "(H)"
  },
  {
    data_type: 85,
    sound: "sounds/Fb.mp3",
    class: "black",
    value: "F#",
    letter: "(U)"
  },
  {
    data_type: 74,
    sound: "sounds/G.mp3",
    class: "white",
    value: "G",
    letter: "(J)"
  },
  {
    data_type: 73,
    sound: "sounds/Gb.mp3",
    class: "black",
    value: "G#",
    letter: "(I)"
  },
  {
    data_type: 75,
    sound: "sounds/A.mp3",
    class: "white",
    value: "A",
    letter: "(K)"
  },
  {
    data_type: 79,
    sound: "sounds/Ab.mp3",
    class: "black",
    value: "A#",
    letter: "(O)"
  },
  {
    data_type: 76,
    sound: "sounds/B.mp3",
    class: "white",
    value: "B",
    letter: "(L)"
  }
];

const keysContainer = document.querySelector('.keys');
const audiosContainer = document.querySelector('.audios');

const appearKeys = () => {
  for (let note of notes) {
    const keys = document.createElement('div');
    keysContainer.appendChild(keys);
    keys.classList.add('key', `${note.class}`);
    keys.setAttribute('data-key', `${note.data_type}`);

    const keyTitle = document.createElement('h3');
    keys.appendChild(keyTitle);
    keyTitle.classList.add('key-title');
    keyTitle.innerHTML = `${note.value}`;

    const keyLetter = document. createElement('p');
    keys.appendChild(keyLetter);
    keyLetter.classList.add('key-letter');
    keyLetter.innerHTML = `${note.letter}`;

    const audios = document.createElement('audio');
    audiosContainer.appendChild(audios);
    audios.setAttribute('data-key', `${note.data_type}`); 
    audios.setAttribute('src', `${note.sound}`); 
  }

  playNotes();  
}

// This function makes possible to handle what happens when a click occurs or a key is pressed
const playNotes = () => {

  // This function plays the audio
  const playAudio = (audio) => {
    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0;
    audio.play();
  }

  //This function handles what happens when a key is pressed.
  const keydownHandler = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    playAudio(audio);
  };

  document.addEventListener('keydown', keydownHandler);
}

appearKeys();