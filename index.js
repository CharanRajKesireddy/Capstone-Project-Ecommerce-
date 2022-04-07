var express = require('express');
const res = require('express/lib/response');
var app = express()
var path = require('path');

var monk = require('monk');
var dbs = monk('mongodb+srv://Mani:Mani@cluster0.gdugc.mongodb.net/Ecommerce?retryWrites=true&w=majority')
var collections = dbs.collection('Products')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'admin styles/css/templatemo-style.css')));
app.use(express.static(path.join(__dirname, 'admin styles/css/bootstrap.min.css')));
app.use(express.static(path.join(__dirname, 'admin styles/css/profile.css')));
app.use(express.static(path.join(__dirname, 'admin styles/css/reports.css')));
app.use(express.static(path.join(__dirname, 'admin styles/css/fontawesome.min.css')));
app.use(express.static(path.join(__dirname, 'css/login.css')));
app.use(express.static(path.join(__dirname, 'css/util.css')));
app.use(express.static(path.join(__dirname, 'css/main.css')));


// //GET LOGIN PAGE
app.get("/loginform",function(req,res){
    res.sendFile(__dirname + "/pages/loginform.html");
});

//GET HOME PAGE
app.get("/",function(req,res){
    res.sendFile(__dirname + "/pages/index.html");
});
// --------------ADMIN--------------

//GET ADMIN PAGE
app.get("/admin",function(req,res){
    res.sendFile(__dirname + "/admin-page/index.html");
});
//GET REPORTS PAGE
app.get("/reports",function(req,res){
    res.sendFile(__dirname + "/admin-page/reports.html");
});
//GET PRODUCTS PAGE
app.get("/products",function(req,res){
    res.sendFile(__dirname + "/admin-page/products.html");
});
//GET ADD-PRODUCT PAGE
app.get("/add-product",function(req,res){
    res.sendFile(__dirname + "/admin-page/add-product.html");
});
//GET EDIT-PRODUCT PAGE
app.get("/edit-product",function(req,res){
    res.sendFile(__dirname + "/admin-page/edit-product.html");
});
//GET ACCOUNTS PAGE
app.get("/accounts",function(req,res){
    res.sendFile(__dirname + "/admin-page/accounts.html");
});
//GET PROFILE PAGE
app.get("/profile",function(req,res){
    res.sendFile(__dirname + "/admin-page/profile.html");
});
//GET LOGIN PAGE
app.get("/admin/login",function(req,res){
    res.sendFile(__dirname + "/admin-page/login.html");
});
/////////////////////////////////
//////////////////////////////////


///GET SHOP PAGE
app.get("/product",function(req,res){
    res.sendFile(__dirname + "/pages/product.html");
    
});
//GET FEAUTERS PAGE
app.get("/shoping-cart",function(req,res){
    res.sendFile(__dirname + "/pages/shoping-cart.html");
});
//GET BLOG PAGE
app.get("/blog",function(req,res){
    res.sendFile(__dirname + "/pages/blog.html");
});
//GET ABOUT PAGE
app.get("/about",function(req,res){
    res.sendFile(__dirname + "/pages/about.html");
});
//GET CONTACT PAGE
app.get("/contact",function(req,res){
    res.sendFile(__dirname + "/pages/contact.html");
});
// //GET Shirts Page
app.get("/shirts",function(req,res){
    res.sendFile(__dirname + "/pages/shirts.html");
});
//GET Shoes Page
app.get("/shoes",function(req,res){
    res.sendFile(__dirname + "/pages/shoes.html");
});
//GET Coats Page
app.get("/coats",function(req,res){
    res.sendFile(__dirname + "/pages/coats.html");
});
//GET Watch Page
app.get("/watch",function(req,res){
    res.sendFile(__dirname + "/pages/watch.html");
});

//products calling
app.get('/getallproducts',function(req,res){
    console.log("working")
    collections.find({},function(err,result){
        if(err){
            console.log("err");
        }
        else{
            console.log(result);
            res.send(result)
        }
        
    });

});


app.listen(3000);