export default function memePage() {
  let html = (document.querySelector('.app').innerHTML = ``);

  registerHandler();

  const bodyHistory = [];

  function registerHandler() {
    document.getElementById('btn-click-me').onkeypress = (_event) => {
      history.pushState({}, '', '/');
      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = html;
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
