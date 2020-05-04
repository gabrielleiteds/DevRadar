const {Router} = require('express');
//controllers
const DevController = require('./controllers/devController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//crud de devs
routes.get('/devs', DevController.index); 
routes.post('/devs', DevController.store);
routes.put('/edit', DevController.update);
routes.delete('/delete/:id', DevController.delete); 
//rotas de procura de devs
routes.get('/search', SearchController.index);  
module.exports = routes; 
