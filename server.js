const express = require('express');
const nodeSession = require('node-session');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res) => {

    session = new nodeSession({ secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD', lifetime:60000 });
    session.startSession(req, res, () => {
        req.session.put('key', 'value');
        req.session.push('Name', 'Nagesh');
        var value = req.session.get('Name');
        var data = req.session.all();
        console.log('Data : ', data);
        console.log('Value : ', value);
    });
     //console.log(session);
})