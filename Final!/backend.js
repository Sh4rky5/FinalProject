const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

let dataStorage = [];

app.post('/api/data', (req, res) => {
    const { textInput, textarea, checkbox, radio, select, email, date } = req.body;

    const data = {
        textInput,
        textarea,
        checkbox,
        radio,
        select,
        email,
        date,
    };

    dataStorage.push(data);
    res.send('Data saved successfully');
});

app.get('/api/data', (req, res) => {
    res.json(dataStorage);
});

app.get('/api/data/:id', (req, res) => {
    const { id } = req.params;
    const data = dataStorage.find((item) => item.id === parseInt(id));

    if (data) {
        res.json(data);
    } else {
        res.status(404).send('Data not found');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});