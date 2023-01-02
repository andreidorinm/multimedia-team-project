import progressBar from '../components/progressBar';

export default function memePage() {
  let template = document.getElementById('game');
  const canvas = template.content.getElementById('canvas');
  const context = canvas.getContext('2d');

  // Draw a liminal space with a gradient fill
  var gradient = context.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#000000');
  gradient.addColorStop(1, '#ffffff');
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  registerHandler();

  const bodyHistory = [];

  function registerHandler() {
    document.getElementById('btn-click-me').onkeypress = (_event) => {
      history.pushState({}, '', '/');
      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = canvas;
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
