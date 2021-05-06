const notes = [
  {
    data_type: 68,
    sound: "sounds/C.mp3",
    class: "white",
    value: "C"
  },
  {
    data_type: 82,
    sound: "sounds/Cb.mp3",
    class: "black",
    value: "C#"
  },
  {
    data_type: 70,
    sound: "sounds/D.mp3",
    class: "white",
    value: "D"
  },
  {
    data_type: 84,
    sound: "sounds/Db.mp3",
    class: "black",
    value: "D#"
  },
  {
    data_type: 71,
    sound: "sounds/E.mp3",
    class: "white",
    value: "E"
  },
  {
    data_type: 72,
    sound: "sounds/F.mp3",
    class: "white",
    value: "F"
  },
  {
    data_type: 85,
    sound: "sounds/Fb.mp3",
    class: "black",
    value: "F#"
  },
  {
    data_type: 74,
    sound: "sounds/G.mp3",
    class: "white",
    value: "G"
  },
  {
    data_type: 73,
    sound: "sounds/Gb.mp3",
    class: "black",
    value: "G#"
  },
  {
    data_type: 75,
    sound: "sounds/A.mp3",
    class: "white",
    value: "A"
  },
  {
    data_type: 79,
    sound: "sounds/Ab.mp3",
    class: "black",
    value: "A#"
  },
  {
    data_type: 76,
    sound: "sounds/B.mp3",
    class: "white",
    value: "B"
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

    const audios = document.createElement('audio');
    audiosContainer.appendChild(audios);
    audios.setAttribute('data-key', `${note.data_type}`); 
    audios.setAttribute('src', `${note.sound}`); 
  }
}

appearKeys();