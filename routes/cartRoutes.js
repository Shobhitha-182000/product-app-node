const express=require('express');
const router=express.Router();
const cartController=require('../controllers/cartControllers');

router.get('/add-cart', cartController.displayFormProducts);
router.post('/add-cart', cartController.postProducts);

router.get('/all-cart', cartController.getAllProduct);
router.get('/one-cart/:id', cartController.getOneProduct);
router.delete('/delete-cart/:id',cartController.delete);
router.get('/delete-cart/:id',cartController.delete);

router.get('/edit-cart/:id',cartController.getEditForm);
router.put('/edit-cart/:id',cartController.updateProduct);






module.exports=router;