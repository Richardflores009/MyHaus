// DISPLAY TENANT PAGES

const router = require('express').Router();
const sequelize = require('../config/config');
const {Landlord, Tenant, Property } = require('../models');

// SHOW PROPERTY INFO
router.get('/', (req, res) => {
  console.log(req.session.tenant_id)
  Property.findAll({
    where: {
      tenant_id: req.session.tenant_id
    },
    attributes: [
      'id',
      'address',
      'maintenance',
      'pet',
      'rent',
      'complex',
      'unit'
    ],
    include: [
      {
        model: Tenant,
        attributes: ['id', 'first_name', 'last_name', 'email'],
      },
      {
        model: Landlord,
        attributes: ['id', 'first_name', 'last_name', 'email']
      }
    ]
  })
    .then(dbPostData => {
      // serialize data before passing to template
      const property = dbPostData.map(property => property.get({ plain: true }));
      
      res.render('tenant-dashboard', { property, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// TENANT LOGIN PAGE
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("tenant-login");
});

// TENANT SIGNUP PAGE
router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("tenant-signup");
});
  
// TENANT LOGOUT
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

  module.exports = router;