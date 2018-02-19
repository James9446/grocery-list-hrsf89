const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to mongoDB')
});

var listSchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.Number,
        unique: true,
        index: true
    },
    quantity: Number,
    description: String
  });

  var ListModel = mongoose.model('ListModel', listSchema);

  let methods = {
      save: (callback) => {
          listSchema
      },
      find: (callback) => {
        ListModel.find(callback);
      },
      update: () => {}
  }

  module.exports.methods = methods;