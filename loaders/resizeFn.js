import modelLoader from './modelLoader';

export default function resizeFn() {
  var width = parseInt(window.innerWidth);

  if (width <= 500) {
    //max-width 500px
  } else if (width > 500 && width <= 850) {
    //max-width 850px
  } else {
    // 850px and beyond
  }
}
