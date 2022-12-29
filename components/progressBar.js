export default function progressBar() {
  let i = 0;
  let audio = new Audio('assets/sounds/win98.mp3');
  audio.play();
  if (i == 0) {
    i = 1;
    let elem = document.getElementById('my-progress');
    let width = 1;
    let id = setInterval(frame, 80);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  }
}
