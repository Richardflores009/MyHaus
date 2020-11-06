const router = require('express').Router();
const sequelize = require('../config/config');
const { Post, Landlord, Tenant, Comment, Property } = require('../models');

// get single post
router.get("/property/:id", (req, res) => {
    Property.findByPk(req.params.id, {
      include: [
        Tenant
      ],
    })
      .then((dbPostData) => {
        if (dbPostData) {
          const property = dbPostData.get({ plain: true });
  
          res.render("tenant-dashboard", { property });
        } else {
          res.status(404).end();
        }
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
  
    res.render("tenant-login");
  });
  
  router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("tenant-signup");
  });
  
  module.exports = router;