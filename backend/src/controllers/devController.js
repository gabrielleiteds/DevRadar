const axios = require('axios'); 
const Dev = require('../models/Dev');

//utils
const parseStringAsArray = require('../utils/parseStringAsArray'); 

module.exports = {
    //listagem
    async index (req, res) 
    {
        const devs = await Dev.find();

        return res.json(devs); 
    },
    //cadastro
    async store (req, res) 
    {
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
    },

    //editar cadastro   
    async update(req, res) {
        const { id } = req.query; 

        await Dev.findById(id, function(err, doc) {
            doc.name = req.body.name; 
            doc.save(); 
            console.log('editado'); 
        })

    },

    async delete(req, res)
    {
        const { id } = req.params; 
        await Dev.findByIdAndDelete(id, function(err, doc){
            if(err)
            {
                console.log('aconteceu um erro'); 
            }
            else{
                console.log('usuario deletado'); 
            }
        })

    }
     
}