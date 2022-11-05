const axios = require('axios');
const { response } = require('express');

class NotesServices {
    constructor() {
        this.notes = [];
        this.getNotes();
    }

    getNotes() {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const { data } = response;
                this.notes.push(data)
            })

    }


    show() {
        return this.notes.flat();
    }


    showOne(id) {
        return this.notes.flat().find((note) => note.id === id)

    }
}

module.exports = NotesServices;


