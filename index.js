const express = require('express');
const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;
const user = require('./routes/user');
const profile = require('./routes/profile');
const posts = require('./routes/posts');


const app = express();

mongoose.connect(db)
  .then(() => console.log('mongo connection succeeded'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello'));

app.use('/user', user);
app.use('/profile', profile);
app.use('/posts', posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`running on port ${port}`))