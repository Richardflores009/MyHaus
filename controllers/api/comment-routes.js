const router = require('express').Router();
const { Landlord, Comment, Tenant, Property } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll({
      attributes: 
      [
        'id',
        'body'
      ],
      include: [
        {
          model: Landlord,
          attributes: ['id', 'first_name', 'last_name', 'email']
        },
        {
            model: Tenant,
            attributes: ['id', 'first_name', 'last_name', 'email']
        }
      ]
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => res.status(404).json(err))
  });
  
  router.get('/:id', (req, res) => {
    Comment.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Landlord,
          attributes: ['id', 'first_name', 'last_name', 'email']
        },
        {
          model: Tenant,
          attributes: ['id', 'first_name', 'last_name', 'email']
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
    Comment.create({
      body: req.body.body,
<<<<<<< HEAD
      landlord_id: req.session.landlord_id,
      tenant_id: req.session.tenant_id,
=======
      landlord_id: req.body.landlord_id,
      tenant_id: req.body.tenant_id,
>>>>>>> 5560d917371baea5fe52d4820a5c367ad11c3f60
      post_id: req.body.post_id
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
    Comment.update(req.body, {
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
    Comment.destroy({
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
  