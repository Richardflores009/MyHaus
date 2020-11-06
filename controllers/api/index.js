const router = require('express').Router();

const tenantRoutes = require('./tenant-routes')
const landlordRoutes = require('./landlord-routes')
const propertyRoutes = require('./property-routes')
const commentRoutes = require('./comment-routes')

router.use('/tenant', tenantRoutes)
router.use('/landlord', landlordRoutes)
router.use('/property', propertyRoutes)
router.use('/comment', commentRoutes)

module.exports = router