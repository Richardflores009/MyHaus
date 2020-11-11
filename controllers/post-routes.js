const router = require('express').Router();
const sequelize = require('../config/config');
const { Post, Landlord, Tenant, Comment, Property } = require('../models');

// DISPLAY MAINTENANCE REQUESTS
router.get("/", (req, res) => {
    Post.findAll({
      //where: {
      //   landlord_id = req.session.landlord_id
      //},
      attributes: [
        'title',
        'description',
        'created_at'
      ]
    })
    .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('maintenance', { 
          layout: "main",
          posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  // DISPLAY SPECIFIC MAINTENANCE REQUEST
// router.get("/:id", (req, res) => {
//     Post.findByPk(req.params.id)
//       .then(dbPostData => {
//         if (dbPostData) {
//           const post = dbPostData.get({ plain: true });
          
//           res.render("landlord-dashboard", {
//             layout: "dashboard",
//             post
//           });
//         } else {
//           res.status(404).end();
//         }
//       })
//       .catch(err => {
//         res.status(500).json(err);
//       });
// });


  module.exports = router;