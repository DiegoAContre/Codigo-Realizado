const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../helpers/auth');

// Rutas de usuario
router.get('/', auth.verifyToken, auth.verifyType, (req, res, next) => { 
  const ActualUser  = req.session.userId;  
  const typeUser = req.session.typeUser;
  res.render('admin/admin', { ActualUser, typeUser });
});

module.exports = router;