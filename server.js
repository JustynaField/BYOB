const express = require('express');
const app = express();
const bodyParser = require('body-parser');



app.set('port', process.env.PORT || 3000);

app.get('/', (request, response) => {
  response.send('It\'s conected')
})

app.listen(app.get('port'), () => {
  console.log(`BYOB is running on ${app.get('port')}.`);
})
