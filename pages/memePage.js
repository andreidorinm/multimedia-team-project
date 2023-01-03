export default function memePage() {
  //   let html = (document.querySelector('#game-cafeluta').innerHTML = `
  //   <div class="background-white"></div>
  // `);

  //change color of a div on keypress
  document.querySelector('.app').style.background =
    'url(./assets/images/pool.jpg)';
  document.querySelector('#threejs').style.display = 'none';
  document.querySelector('.container-progress-bar').style.display = 'none';
  document.querySelector('.background-text').style.display = 'none';
  // history.pushState({}, '', '/');
  // bodyHistory.push(document.body.innerHTML);
  // document.body.innerHTML = html;

  // const bodyHistory = [];

  function registerHandler() {}

  // onpopstate = (_event) => {
  //   const previousContent = bodyHistory.pop();

  //   if (previousContent) {
  //     location.reload();
  //     document.body.innerHTML = previousContent;
  //     registerHandler();
  //   }
  // };
}
