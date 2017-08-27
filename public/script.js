const submit = document.getElementById('submit');

const printToken = (data) => {
  const token = document.getElementById('token');
  token.innerText = data;
};

const authenticateUser = () => {
  const emailVal = document.getElementById('email').value;
  const appNameVal = document.getElementById('app-name').value;

  fetch('/authentication', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: emailVal,
      appName: appNameVal,
    }),
  })
    .then(res => res.json())
    .then((data) => {
      printToken(data.token);
    })
    .catch(error => console.log(error));
};

submit.addEventListener('click', () => {
  const email = document.getElementById('email');
  const app = document.getElementById('app-name');

  authenticateUser();
  printToken();
  email.value = '';
  app.value = '';
});
