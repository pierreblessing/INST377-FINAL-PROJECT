const express = require('express');
const supabaseClient = require('@supabase/supabase-js');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://rqkwwyoaeswcmxqprmrl.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxa3d3eW9hZXN3Y214cXBybXJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3OTQ3MzUsImV4cCI6MjA0NzM3MDczNX0.lFCNsUJeZjfkpjqGpt7JMwrRFTwehd-WK4feasXTwf8';
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
  res.sendFile('public/signin.html', { root: __dirname });
});

app.get('/customers', async (req, res) => {
  console.log('Attempting to get all customers.');

  const { data, error } = await supabase.from('customer').select();

  if (error) {
    console.log('Error:', error);
    res.send(error);
  } else {
    console.log('Successfully Retrieved Data');
    res.send(data);
  }
});

app.post('/customer', async (req, res) => {
  console.log('Attempting to add Customer.');
  console.log('Request', req.body);

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const { data, error } = await supabase
    .from('customer')
    .insert({
      customer_first_name: firstName,
      customer_last_name: lastName,
    })
    .select();

  if (error) {
    console.log('Error:', error);
    res.send(error);
  } else {
    console.log('Successfully Retrieved Data');
    res.send(data);
  }
});

app.listen(port, () => {
  console.log('App is ALIVEEEEEE');
});