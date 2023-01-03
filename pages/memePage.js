export default function memePage() {
  let audio = new Audio('public/sounds/audiocafea.mp3');
  audio.play();
  document.querySelector('.app').style.background =
    'url(./public/images/liminalpool.jpg)';
  document.querySelector('#threejs').style.display = 'none';
  document.querySelector('.container-progress-bar').style.display = 'none';
  document.querySelector('.background-text').style.display = 'none';
  document.querySelector('.game-container').style.display = 'flex';
  document.querySelector('.game-container').style.justifyContent = 'center';
  document.querySelector('.game-container').style.alignItems = 'center';
  document.querySelector('.game-container').style.flexDirection = 'flex-column';
  document.querySelector('.keyboard').style.display = 'flex';
  document.querySelector('.keyboard').style.justifyContent = 'center';
  document.querySelector('.keyboard').style.alignItems = 'center';
  document.querySelector('.keyboard').style.flexDirection = 'flex-column';
  document.querySelector('.keyboard').style.background =
    'url(./public/images/keyboard.png)';
  document.querySelector('.text-keyboard').style.display = 'flex';
}
