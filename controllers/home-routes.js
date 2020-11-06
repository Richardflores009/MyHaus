const router = require('express').Router();
const sequelize = require('../config/config');
const { Post, Landlord, Tenant, Comment, Property } = require('../models');

// get all posts for homepage
router.get("/", (req, res) => {
    Property.findAll({
      include: [Landlord],
    })
      .then((dbPostData) => {
        const property = dbPostData.map((property) => property.get({ plain: true }));
  
        res.render("landlord-dashboard", { property });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("landlord-login");
  });
  
  router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("landlord-signup");
  });
  
  module.exports = router;
  