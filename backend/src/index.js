const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const apiRoutes = require('./routes/index')

apiRoutes(app)



const port = 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
