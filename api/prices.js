const services = require('../src/services');

module.exports = (req, res) => {
  res.json(services.getPriceOracle().getAllPrices());
};
