const express = require('express'); //imported the package
const router = express.Router(); 
const Post = require('../models/post');


router.get('/', (req,res) => {
    res.send('We are on posts'); 
}); 

router.post('/', (req,res) => {
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
   
    post.save()
        .then(data => {
            res.json(data);
            console.log('subido'); 
        })
        .catch(err => {
            console.log(err);
            res.json({message: err });
            console.log('f'); 
        });

}); 

module.exports = router; 