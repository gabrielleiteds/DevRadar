const axios = require('axios'); 
const Dev = require('../models/Dev');

//utils
const parseStringAsArray = require('../utils/parseStringAsArray'); 

module.exports = {
    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs); 
    },

    async store (req, res) {
        const {github_username, techs, latitude, longitude } = req.body; 

        let dev = await Dev.findOne({ github_username }); 

        if(!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); 
    
            //transformando tecnologias em array 
            const techsArray = parseStringAsArray(techs); 
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            //pegando dados do git
            const {name = login, avatar_url, bio} = apiResponse.data;
        
            dev = await Dev.create({
                github_username: github_username,
                name: name,
                avatar_url: avatar_url, 
                biografia: bio,
                techs: techsArray,
                location
            })  
        }
        else 
        {
            return res.send('esse usuario já existe')
        }

        return res.json(dev); 
    }
}