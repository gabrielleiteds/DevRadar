const {Router} = require('express');
//controllers
const DevController = require('./controllers/devController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//listagem e cadastro de devs
routes.get('/devs', DevController.index); 
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);  
module.exports = routes; 
