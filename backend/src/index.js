const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


let notes = [
    {
        "id": 1,
        "content": "lorem ipsum",
        "date": "2019-05-30T17:30:31.098Z",
        "important": true
    },
    {
        "id": 2,
        "contente": "John Doe is my brother",
        "date": "2019-05-30T18:39:34.091Z",
        "important": false
    }

]

app.get('/api', (req, res) => {
    res.json({ message: "Hello API" });
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    console.log({ id });
    const note = notes.find(note => note.id === id);

    note ? res.json(note) : res.status(404).json({ message: 'Note not found' }).end();
})


app.post('/api/notes/create', (req, res) => {
    const note = req.body;
    console.log({ note });

    const ids = notes.map(note => note.id);
    const maxId = Math.max(...ids);

    const newNote = {
        id: maxId + 1,
        content: note.content,
        important: typeof note.important !== 'undefined' ? note.important : false,
        date: new Date().toDateString()
    }

    notes = [...notes, newNote];
    res.status(201).json(newNote).end();

})


app.delete('/api/notes/delete/:id', (req, res) => {
    const id = Number(req.params.id);
    notes = notes.filter(note => note.id !== id);
    res.status(204).end();
})





const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
