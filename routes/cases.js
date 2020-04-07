const caseRoutes = require('./cases');
const path = require('path');

const constructorMethod = (app) => {
    app.use('/cases', caseRoutes);

    app.use('*', (req, res) => {   
        res.status(404).json({ error: 'Not found' });  
    }); 
};

module.exports = constructorMethod