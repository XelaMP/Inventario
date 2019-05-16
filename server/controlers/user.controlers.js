const User= require('../models/user');

const UserCtrl = {};

UserCtrl.getUsers = async(req,res) => {
    const user = await User.find();
    res.json(user);
}

UserCtrl.createUser= async (req,res) => {
    const user= new User({
        name : req.body.name,
        rol: req.body.rol,  
        tel:req.body.tel,
        pass:req.body.pass,
        user: req.body.user
    });
    await user.save();
    res.json({
        'status' : 'Usuario Guardado'
    });

}
UserCtrl.getUser= async (req,res)  =>{
    const user = await User.findById(req.params.id);
       res.json(user);
};

UserCtrl.editUser=async (req,res)  =>{
    const {id} =req.params;
    const user = {
        name : req.body.name,
        rol: req.body.rol,  
        tel:req.body.tel,
        pass:req.body.pass,
        user: req.body.user
    }
  await  user.findByIdAndUpdate(id, {$set:user},{new: true});
    res.json({status:'Usuario actualizado'});

    
    };
    UserCtrl.deleteUser = async (req,res)  =>{
    await user.findByIdAndRemove(req.params.id);
    res.json({status:'Usuario eliminado'});

};


module.exports = UserCtrl;