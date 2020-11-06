const withAuth = (req, res, next) => {
  if (!req.session.tenantId || !req.session.landlordId) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
