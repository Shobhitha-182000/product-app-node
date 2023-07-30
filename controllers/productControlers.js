const cart = require("../models/cart");
const product = require("../models/product");
const Product = require("../models/product");
const path=require('path');
const user = require("../models/user");

exports.displayFormProducts=(req,res,next)=>{
    cart.findAll({attributes:['id','title']})
    .then(cart=>{
        console.log(cart)
        res.sendFile(path.join(__dirname,'..','views','Add-Product.html'));
    })
    .catch(err=>console.log(err))
    
}
exports.postProducts=(req,res,next)=>{
    const title=req.body.title;
    const description=req.body.description;
    const price=req.body.price;
    const imageurl=req.body.imageurl;
    const cartId=req.body.cartId;
    let cartObj;
    cart.findByPk(cartId)
    .then(cart=>{
        if(!cart){
            res.send('<h1>Cart value is invalid unable to save</h1>');
            return res.exit();
        }
        cartObj=cart;
        return  req.user.createProduct({
            title:title,
            description:description,
            price:price,
            imageurl:imageurl,
        })
    }).then(productObj=>{
       return productObj.setCart(cartObj);
    }).then(data=>{
        res.redirect('/product/add-product');
    }).catch(err=>console.log(err))
}

exports.getAllProduct=(req,res,next)=>{
    Product.findAll({include:[{model:cart},{model:user}]})
    .then(data=>{
        res.json(data);
    })
    .catch(err=>console.log(err));
}

exports.getOneProduct=(req,res,next)=>{
    const prodId=req.params.id;
    console.log(prodId);
    Product.findByPk(prodId)
    .then(user=>{
        if(!user){
            console.log('no user found');
        }
        res.json(user);
    })
    .catch(err=>console.log(err))
}

exports.delete=(req,res,next)=>{
    const prodId=req.params.id;
    Product.destroy({where:{id:prodId}})
    .then(user=>{
        if(!user){
            console.log('no user found');
        }
        res.json({message:'User deleted sucessfully'})
    })
    .catch(err=>console.log(err));
}

exports.updateProduct=(req,res,next)=>{
    const prodId=req.params.id;
    Product.findByPk(prodId)
    .then((product)=>{
        product.title=req.body.title;
        product.description=req.body.description;
        product.price=req.body.price;
        product.imageurl=req.body.imageurl;
        return product.save();
    })
    .then((product)=>{
        res.json(product);
    })
    .catch(err=>console.log(err));
}

exports.getEditForm=(req,res,next)=>{
    const prodId=req.params.id;
    Product.findByPk(prodId)
    .then(product=>{
        if(!product){
            res.send('<h1>No id found</h1>');
        }
        res.sendFile(path.join(__dirname,'..','views','Edit-Product.html'));
    })
    .catch(err=>console.log(err));
}
