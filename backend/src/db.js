const db = require('mongoose')

db.connect('mongodb+srv://gabrielprog:9l19g17g@cluster0-0vkw3.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = db; 