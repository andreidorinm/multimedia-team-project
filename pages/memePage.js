import progressBar from '../components/progressBar';
import barMove from '../components/progressBar';

export default function memePage() {
  const template = '<h1>Details</h1> <p>Some highly useful information</p>';

  const bodyHistory = [];

  registerHandler();

  function registerHandler() {
    document.getElementById('container-progress-bar').onclick = (_event) => {
      history.pushState({}, '', '/details');

      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = template;
    };
  }

  onpopstate = (_event) => {
    const previousContent = bodyHistory.pop();

    if (previousContent) {
      document.body.innerHTML = previousContent;
      registerHandler();
    }
  };
}
