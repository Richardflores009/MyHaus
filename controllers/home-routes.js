// LANDLORD PAGES

const router = require('express').Router();
const sequelize = require('../config/config');
const { Landlord, Tenant, Property } = require('../models');


// LANDLORD | MAIN DASHBOARD
router.get('/home', (req, res) => {
  Property.findAll({
    where: {
      // use the ID from the session
      landlord_id: req.session.landlord_id
    },
    attributes: [
      'id',
      'address',
      'maintenance',
      'pet',
      'rent',
      'unit',
      'complex'
    ],
    include: [
      {
        model: Landlord,
        attributes: ['id', 'first_name', 'last_name', 'email'],
      },
      {
        model: Tenant,
        attributes: ['first_name', 'last_name', 'email']
      }
    ]
  })
    .then(dbPostData => {
      // serialize data before passing to template
      const property = dbPostData.map(property => property.get({ plain: true }));
      
      res.render('landlord-dashboard', { property, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// LANDLORD EDITS PROPERTY
router.get('/property/:id', (req, res) => {
  Property.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Landlord,
      }
    ]
  })
  .then(dbPostData => {
    // serialize data before passing to template
    const property = dbPostData.get({ plain: true })
  
    res.render('edit-landlord-property', { property, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// LANDLORD LOGIN PAGE
router.get("/", (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect("/");
    //   return;
    // }
  
    res.render("landlord-login");
});
  
  // LANDLORD SIGNUP PAGE
  router.get("/signup", (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect("/");
    //   return;
    // }
  
    res.render("landlord-signup");
  });
  
  module.exports = router;
  