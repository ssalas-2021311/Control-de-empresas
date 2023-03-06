const {Router} = require('express');
const { check } = require('express-validator');
const { getSucursales, postSucursal, putSucursal, deleteSucursal, asignarEmpresa } = require('../controllers/sucursal');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/mostrar',[
    validarJWT
], getSucursales);

router.post('/agregar', [
    check('municipio', 'El nombre del municipio es olbigatorio').not().isEmpty(),
    validarCampos,
    validarJWT
], postSucursal);

router.put('/editar/:id', [
    validarJWT
], putSucursal);

router.delete('/eliminar/:id', [
    validarJWT
], deleteSucursal);

router.get('/asignar/:idSucursal', [
    validarJWT
], asignarEmpresa);

module.exports = router;