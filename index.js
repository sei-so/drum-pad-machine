function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function removeTransition(a) {
    if (a.propertyName !== 'transform') return;
    a.target.classList.remove('playing');
  }
  
  function playSound(a) {
    const audio = document.querySelector(`audio[data-key="${a.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${a.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    sleep(100).then(() => { key.classList.remove('playing'); });
    audio.currentTime = 0;
    audio.play();
  }

  const clapBtn = document.querySelector('#clap');
  const crashBtn = document.querySelector('#crash');
  const kickBtn = document.querySelector('#kick');
  const closedhihatBtn = document.querySelector('#closed-hh');

  const snapBtn = document.querySelector('#snap');
  const rideBtn = document.querySelector('#ride');
  const snareBtn = document.querySelector('#snare');
  const openhihatBtn = document.querySelector('#open-hh');

  const loopOneBtn = document.querySelector('#loop-pad-one');
  const loopTwoBtn = document.querySelector('#loop-pad-two');
  const loopThreeBtn = document.querySelector('#loop-pad-three');
  const loopFourBtn = document.querySelector('#loop-pad-four');

  const clapAudio = document.querySelector(`audio[data-key="69"]`);
  const crashAudio = document.querySelector(`audio[data-key="82"]`);
  const kickAudio = document.querySelector(`audio[data-key="68"]`);
  const closedhihatAudio = document.querySelector(`audio[data-key="70"]`);

  const snapAudio = document.querySelector(`audio[data-key="85"]`);
  const rideAudio = document.querySelector(`audio[data-key="73"]`);
  const snareAudio = document.querySelector(`audio[data-key="74"]`);
  const openhihatAudio = document.querySelector(`audio[data-key="75"]`);

  const loopOneAudio = document.querySelector(`audio[data-key="49"]`);
  const loopTwoAudio = document.querySelector(`audio[data-key="50"]`);
  const loopThreeAudio = document.querySelector(`audio[data-key="51"]`);
  const loopFourAudio = document.querySelector(`audio[data-key="52"]`);

  clapBtn.addEventListener('click', () => {
      clapAudio.play();
  });

  crashBtn.addEventListener('click', () => {
    crashAudio.play();
});

kickBtn.addEventListener('click', () => {
    kickAudio.play();
});

closedhihatBtn.addEventListener('click', () => {
    closedhihatAudio.play();
});

snapBtn.addEventListener('click', () => {
    snapAudio.play();
});

rideBtn.addEventListener('click', () => {
    rideAudio.play();
});

snareBtn.addEventListener('click', () => {
    snareAudio.play();
});

openhihatBtn.addEventListener('click', () => {
    openhihatAudio.play();
});

loopOneBtn.addEventListener('click', () => {
    loopOneAudio.play();
});

loopTwoBtn.addEventListener('click', () => {
    loopTwoAudio.play();
});

loopThreeBtn.addEventListener('click', () => {
    loopThreeAudio.play();
});

loopFourBtn.addEventListener('click', () => {
    loopFourAudio.play();
});

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);