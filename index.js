const express = require('express');
const supabaseClient = require('@supabase/supabase-js');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://wepgtbtoklxnzukcndzr.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlcGd0YnRva2x4bnp1a2NuZHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzMTY0NTMsImV4cCI6MjA0OTg5MjQ1M30.gmRLqghpD9JeJLgvQzOUNzlDcVd4CMjIONX-jfRQoN0';
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
  res.sendFile('', { root: __dirname });
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

app.listen(port, () => {
  console.log('App is ALIVEEEEEE');
});