const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const tokenID = req.session.token; // Obtiene el token de la sesión      
    if (!tokenID) {
        const error = new Error('No se inicio sesion correctamente');
        console.error(error);
        return res.render('layouts/error', { error });    
    }

    jwt.verify(tokenID, process.env.JWT_SECRET || '1234', (err, decoded) => {
        if (err) {              
        console.error(err);
        return res.render('layouts/error', { err });
        }           
        req.user = decoded;
        next(); // Continuar con la siguiente función de middleware o ruta
    });
}

exports.verifyType = (req, res, next) => {
    const typeUser = req.session.typeUser;
    if (typeUser !== 'admin') {
      const error = new Error('Necesitas derechos de administrador para entrar');
      console.error(error);
      return res.render('layouts/error', { error }); 
    }  
    next();
}