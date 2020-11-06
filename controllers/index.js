const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const tenantRoutes = require('./tenant-routes.js');
const messageRoutes = require('./message-routes.js');

router.use('/', homeRoutes);
router.use('/tenant', tenantRoutes);
router.use('/message', messageRoutes)
router.use('/api', apiRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;