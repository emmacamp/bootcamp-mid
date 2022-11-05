const notes = require('./notes')

const apiRoutes = (app) => {
    app.use('/notes', notes)
}


module.exports = apiRoutes;