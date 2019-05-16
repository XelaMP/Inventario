const mongoose= require ('mongoose');
const URI = 'mongodb://localhost/inventary-crud'


mongoose.connect(URI)
    .then(db => console.log('Db conectada'))
    .catch(err => console.error(err));

module.exports= mongoose;