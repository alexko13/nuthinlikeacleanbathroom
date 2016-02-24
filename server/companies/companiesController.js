var Companies = require('./companiesModel');

var getAll = function(req, res) {
  Companies.query('select name, state_code, city from objects where state_code is NOT NULL && city is NOT NULL limit 100', 
    function(err, results) {
      if (err) {
        return console.log('There was an error querying the database: ', err);
      }
      res.status(200).json(results);
    });
};

module.exports = {
  getAll: getAll
};