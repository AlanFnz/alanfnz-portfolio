const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');
const sgMail = require('@sendgrid/mail')

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true}));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.post('/message', (req, res, next) => {
  const name = req.body.name;
  const from = req.body.email;
  const message = `Message from the portfolio by ${name} < ${from} >: ${req.body.message}`;

  var msg = {
    to: 'alan.ixtlan@gmail.com',  
    from: 'alan.f@msn.com',
    subject: 'Contact from Portfolio',
    text: message
  }

  sgMail
  .send(msg)
  .then(() => {
    res.status(200).json({ status: 'success' });
  })
  .catch((error) => {
    console.error(error)
    res.status(500).json({ status: 'error' });
  })

})
