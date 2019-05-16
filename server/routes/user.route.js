const express= require ('express');
const router= express.Router();

const user= require('../controlers/user.controlers');

router.get('/',user.getUsers);
router.post('/',user.createUser);
router.get('/:id',user.getUser);
router.put('/:id',user.editUser);
router.delete('/:id',user.deleteUser);


module.exports=router;