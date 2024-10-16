const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

// Rutas de usuario
router.get('/', (req, res, next)=>{
    new Promise((resolve, reject) =>{        
        postController.getPosts("string", (error, data)=>{        
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    }).then((data)=>{
        res.send(data);        
        res.end();
    }).catch((error)=>{
        res.write(error.message);
        res.end();
    });
});

router.post('/', (req, res, next)=>{
    new Promise((resolve, reject) => {
        postController.createPost(req.body, (error, data)=>{        
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    }).then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.write(error.message);
        res.end();
    });
});

router.put('/:id', (req, res, next)=>{
    new Promise((resolve, reject) =>{        
        postController.updatePost(req.params, req.body, (error, data)=>{        
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    }).then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.write(error.message);
        res.end();
    });
});

router.delete('/:id', (req, res, next)=>{
    new Promise((resolve, reject) => {
        postController.deletePost(req.params, (error, data)=>{        
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    }).then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.write(error.message);
        res.end();
    });
});



module.exports = router;