const express = require("express");
const generalController = require("../controllers/GeneralController");

const router = express.Router();


//Login'den next()! Kullanıcı Profil Düzenleme Sayfası Gelecek Bundan Sonrası Post
router.route('/').get(generalController.GetHome);
router.route('/exchange').post(generalController.PostHome);

module.exports = router;