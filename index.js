const express = require('express');
const supabaseClient = require('@supabase/supabase-js');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://cdbifbbxpkexrjosnbkp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkYmlmYmJ4cGtleHJqb3NuYmtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzMjA1MjksImV4cCI6MjA0OTg5NjUyOX0.Q0KX-XFhT6oITbG0XJpOL-npCT6RlIxbs0AmUFdOBzo';
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
  res.sendFile('public/signin.html', { root: __dirname });
});

app.get('/username', async (req, res) => {
  console.log('Attempting to get all usernames.');

  const { data, error } = await supabase.from('377customertable').select();

  if (error) {
    console.log('Error:', error);
    res.send(error);
  } else {
    console.log('Successfully Retrieved Data');
    res.send(data);
  }
});

app.post('/377customertable', async (req, res) => {
  console.log('Attempting to add username.');
  console.log('Request', req.body);

  const usernameDB = req.body.username;
  const passwordDB = req.body.password;

  const { data, error } = await supabase
    .from('377customertable')
    .insert({
      username: usernameDB,
      password: passwordDB,
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