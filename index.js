const express = require('express');
const app = express();
const path = require('path');
const expressHandlebars = require('express-handlebars');
const routes = require('./routes/routes');

// set public folder

app.use(express.static(path.join(__dirname, 'public')));

// set default layout

app.engine('handlebars', expressHandlebars({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

// set routes

app.use('/', routes);



// init listen port

app.listen(3000, () => {
   console.log('listen on port 3000');
});