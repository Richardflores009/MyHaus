const router = require('express').Router();
const { Landlord, Comment, Tenant, Property } = require('../../models');

router.get('/', (req, res) => {
    Landlord.findAll({
      attributes: 
      [
        'id',
        'first_name',
        'last_name',
        'email',
      ],
      include: [
        {
          model: Property,
          attributes: ['id', 'address', 'pet', 'stock', 'tenant_id', 'landlord_id']
        },
        {
            model: Comment,
            attributes: ['id', 'body']
        }
      ]
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => res.status(404).json(err))
    // find all categories
    // be sure to include its associated Products
  });
  
  router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    Landlord.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Property,
          attributes: ['id', 'address', 'pet', 'stock', 'tenant_id', 'landlord_id']
        }
      ]
    })
    .then(dbCategoryData => {
      if(!dbCategoryData){
        res.status(404).json({ message: 'Think before you type no categories here...'});
      return;
      }
      res.json(dbCategoryData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  });
  
  router.post('/', (req, res) => {
    // create a new landlord
    Landlord.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      comment_id: req.body.comment_id,
      property_id: req.body.property_id
    })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'follow the category entry format, dummy'});
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  });
  
  router.put('/:id', (req, res) => {
    Landlord.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'nope try again'});
        return;
      }
      res.json(dbCategoryData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  });
  
  router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Landlord.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'you cant delete something that doesnt exist...'});
        return;
      }
      res.json(dbCategoryData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  });
  
  module.exports = router;
  