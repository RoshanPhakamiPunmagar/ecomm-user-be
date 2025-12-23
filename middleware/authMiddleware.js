module.exports = (req, res, next) => {
  // Placeholder authentication middleware
  req.user = { id: null, role: 'guest' };
  next();
};
