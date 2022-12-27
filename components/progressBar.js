export default function barMove() {
  let i = 0;
  if (i == 0) {
    i = 1;
    let elem = document.getElementById('my-bar');
    let width = 1;
    let id = setInterval(frame, 10);
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
