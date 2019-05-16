const mongoose = require ('mongoose');
const {Schema}=mongoose;

const userSchema= new Schema({
    name : { type:String, required:true},
    rol:{type:String, required:true},
    tel:{type:Number,required:true},
    pass:{type: String,required:true},
    user:{type: String,required:true}

});

module.exports= mongoose.model('user',userSchema);
