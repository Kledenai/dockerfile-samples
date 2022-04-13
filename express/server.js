const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(3000, () => {
    console.log('Listining on port 3000!');
    console.log('http://localhost:3000');
})