import progressBar from '../components/progressBar';

export default function memePage() {
  const template = '<h1>Details</h1> <p>Some highly useful information</p>';

  const bodyHistory = [];

  registerHandler();

  function registerHandler() {
    document.getElementById('btn-click-me').onclick = (_event) => {
      history.pushState({}, '', '/');

      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = template;
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
