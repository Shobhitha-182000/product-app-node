const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');

router.get('/add-user', userController.displayFormProducts);
router.post('/add-user', userController.postProducts);

router.get('/all-user', userController.getAllProduct);
router.get('/one-user/:id', userController.getOneProduct);
router.delete('/delete-user/:id',userController.delete);
router.get('/delete-user/:id',userController.delete);

router.get('/edit-user/:id',userController.getEditForm);
router.put('/edit-user/:id',userController.updateProduct);






module.exports=router;