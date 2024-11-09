const express = require('express');
const mainController = require('../controllers/mainController');
const upload = require('../middlewares/multerConfig'); 
const router = express.Router();

router.get('/', mainController.renderHome);
router.get('/panel', mainController.listProducts);
router.get('/addProduct', mainController.renderAddProduct); 
router.get('/admin', mainController.renderAdmin);
router.get('/addAdmin', mainController.renderAddAdmin);
router.post('/addProduct', upload.single('img'), mainController.createProduct);
router.get('/delete/:id', mainController.deleteProduct);


module.exports = router;
