// Initialize express
const express = require('express')
const app = express()

// require handlebars
const exphbs = require('express-handlebars');

// Use "main" as our default layout
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

// Use handlebars to render
app.set('view engine', 'handlebars');


// Choose a port to listen on
const port = process.env.PORT || 3000;

// what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})



// INDEX
app.get('/', (req, res) => {
  res.render('events-index', { events: events });
})

// mock array
var events = [
  { title: "I am your first event", desc: "A great event that is super fun to look at and good", imgUrl: "https://cdn.pixabay.com/photo/2017/08/08/00/17/events-2609526__480.jpg" },
  { title: "I am your second event", desc: "A great event that is super fun to look at and good", imgUrl: "https://cdn.pixabay.com/photo/2017/08/08/00/17/events-2609526__480.jpg" },
  { title: "I am your third event", desc: "A great event that is super fun to look at and good", imgUrl: "https://cdn.pixabay.com/photo/2017/08/08/00/17/events-2609526__480.jpg" }
]

