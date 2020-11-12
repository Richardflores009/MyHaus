const router = require('express').Router();
const sequelize = require('../config/config');
const { Post, Landlord, Tenant, Comment, Property, Pet } = require('../models');

// DISPLAY PET REQUESTS
router.get("/", (req, res) => {
    Pet.findAll({
        // where: {
        //     landlord_id = req.session.landlord_id
        // },
    attributes: [
        'description',
        'created_at'
    ]
    })
    .then(dbPetData => {
        const pets = dbPetData.map(post => post.get({ plain: true}));

        res.render('pets', {
            layout: "main",
            pets });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;
