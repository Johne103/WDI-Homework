const express = require("express");
const router  = express.Router();
const quotesController = require("../controllers/quotesController");

// root path
router.get("/" ,(req, res) => {
  res.redirect(302, "/quotes");
});

// Food Restful routes

router.route("/quotes")
  .get(quotesController.index)
  .post(quotesController.create);

router.route("/quotes/new")
  .get(quotesController.create);

router.route("/quotes/:id")
  .get(quotesController.show)
  .put(quotesController.update)
  .delete(quotesController.delete);

router.route("/quotes/:id/edit")
  .get(quotesController.edit);


module.exports = router;
