const express = require('express');
const router = express.Router();

const NotesSercivices = require('../services/notes.services')
const services = new NotesSercivices();

router.get('/', (req, res) => {
    const notes = services.show();
    res.json(notes)
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const note = services.showOne(id)
    res.json(note)
    // note ? res.json(note) : res.status(404).json({ message: 'Note not found' }).end();
})


router.post('/create', (req, res) => {
    const note = req.body;
    console.log({ note });

    const ids = notes.map(note => note.id);
    const maxId = Math.max(...ids);

    const newNote = {
        id: maxId + 1,
        content: note.content || 'no content',
        important: typeof note.important !== 'undefined' ? note.important : false,
        date: new Date().toDateString()
    }


    notes = [...notes, newNote];
    res.status(201).json(newNote).end();

})


router.delete('delete/:id', (req, res) => {
    const id = Number(req.params.id);
    notes = notes.filter(note => note.id !== id);

    if (notes.length === 0) {
        res.status(404).json({ message: 'Note not found' }).end();
    }

    res.status(204).end();
})


module.exports = router;