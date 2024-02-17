const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

// middleware
app.use(cors());


/*
__dirname: This is sort of like inserting the result of running pwd in your command line – it finds
the full path of your server file. This is useful for running your server in multiple
places (like your local computer and your deployment server) since the absolute path
will change based on what system you’re on.

This code will look for static files (e.g. HTML, CSS) in a folder called "public"
*/
app.use(express.static(`${__dirname}/public`));



//routes
// app.get('/', (req, res) => res.status(200).send())

app.listen(PORT, () => console.log(`server running on ${PORT}`))
