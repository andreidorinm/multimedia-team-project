import progressBar from '../components/progressBar';

export default function memePage() {
  const coffeeGame = document.getElementById('coffee-game');
  const context = coffeeGame.getContext('2d');

  // Keyboard collect
  const keys = [];
  document.onkeydown = (e) => {
    var code = e.which;
    if (keys.indexOf(code) < 0) {
      keys.push(code);
    }
  };
  document.onkeyup = (e) => keys.splice(keys.indexOf(e.which), 1);

  // constants

  const room = new Image();
  const lx = 0;
  const ly = 0;
  const li = 0;
  const lo = 0;
  const lwidth = 100;
  const lheight = 100;
  room.onload = function () {
    context.drawImage(room, lx, ly, lwidth, lheight, li, lo, 200, 200);
  };
  room.src = 'https://i.ibb.co/D7fL7yN/Room.png';

  const sprite = new Image();
  const swidth = 35;
  const sheight = 34;
  const sy = 0;
  sprite.onload = function () {
    context.drawImage(sprite, 0, sy, swidth, sheight, 0, cy, 50, 50);
  };
  sprite.src = 'https://i.ibb.co/7VhjqPr/John-Sheet.png';

  // variables
  let cx = 0;
  let cy = 125;
  let sx = 0;

  // new variables
  const frames_per_step = 20;
  let moving = false; // moving flag
  let step = 0; // frame counter (for steps)

  // main loop function
  function tick() {
    // keyboard process
    if (keys.length) {
      keys.forEach((item) => {
        switch (item) {
          case 68:
          case 39: //D and right arrow
            cx += 1; // move right
            // change sprite
            if (step++ < frames_per_step / 2) {
              sx = 35; // leg up
            } else {
              sx = 70; // leg  down
              if (step > frames_per_step) step = 0;
            }
            moving = true;
            break;
          case 65:
          case 37: //A and left arrow
            cx -= 1; // move left
            // change sprite
            if (step++ < frames_per_step / 2) {
              sx = 105;
            } else {
              sx = 140;
              if (step > frames_per_step) step = 0;
            }
            moving = true;
            break;

          // no sprite mechanics here, just move
          case 87:
          case 38: //W adn arrow up
            cy -= 1;
            break;
          case 83:
          case 40: //S adn arrow down
            cy += 1;
            break;
        }
      });

      // render
      context.drawImage(room, lx, ly, lwidth, lheight, li, lo, 200, 200);
      context.drawImage(sprite, sx, sy, swidth, sheight, cx, cy, 50, 50);
    } else if (moving) {
      // return sprite to stay position
      sx = 0;
      context.drawImage(room, lx, ly, lwidth, lheight, li, lo, 200, 200);
      context.drawImage(sprite, sx, sy, swidth, sheight, cx, cy, 50, 50);
      moving = false;
    } // else do nothing

    requestAnimationFrame(tick);
  }
  tick();

  registerHandler();

  const bodyHistory = [];

  function registerHandler() {
    document.getElementById('btn-click-me').onkeypress = (_event) => {
      history.pushState({}, '', '/');
      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = coffeeGame;
    };
  }

  onpopstate = (_event) => {
    const previousContent = bodyHistory.pop();

    if (previousContent) {
      location.reload();
      document.body.innerHTML = previousContent;
      registerHandler();
    }
  };
}
