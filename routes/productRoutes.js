const express=require('express');
const router=express.Router();
const productController=require('../controllers/productControlers');

router.get('/add-product', productController.displayFormProducts);
router.post('/add-product', productController.postProducts);

router.get('/all-product', productController.getAllProduct);
router.get('/one-product/:id', productController.getOneProduct);
router.delete('/delete-product/:id',productController.delete);
router.get('/delete-product/:id',productController.delete);

router.get('/edit-product/:id',productController.getEditForm);
router.put('/edit-product/:id',productController.updateProduct);






module.exports=router;