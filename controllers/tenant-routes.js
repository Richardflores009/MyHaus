const router = require('express').Router();
const sequelize = require('../config/config');
const { Post, Landlord, Tenant, Comment, Property } = require('../models');


router.get("/login", (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect("/");
    //   return;
    // }
  
    res.render("tenant-login");
  });
  
  router.get("/signup", (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect("/");
    //   return;
    // }
  
    res.render("tenant-signup");
  });
  
  module.exports = router;