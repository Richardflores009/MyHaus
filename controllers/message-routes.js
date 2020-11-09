const router = require('express').Router();
const sequelize = require('../config/config');
const { Post, Landlord, Tenant, Comment, Property } = require('../models');
<<<<<<< HEAD
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
    Post.findAll({
      where: {
        landlord_id: req.session.landlord_id
      }
    })
      .then(dbPostData => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        res.render("all-messages", {
          layout: "message",
          posts
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
  });

  router.get("/new", withAuth, (req, res) => {
    res.render("new-messsage", {
      layout: "message"
    });
  });
  
  router.get("/edit/:id", withAuth, (req, res) => {
    Post.findByPk(req.params.id)
      .then(dbPostData => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });
          
          res.render("edit-message", {
            layout: "message",
            post
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
=======



>>>>>>> 5560d917371baea5fe52d4820a5c367ad11c3f60
  
  module.exports = router;