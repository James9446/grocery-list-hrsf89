const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to mongoDB')
});

var listSchema = mongoose.Schema({
  quantity: Number,
  description: {
    type: mongoose.Schema.Types.String,
    unique: true
  }
});

var ListModel = mongoose.model('ListModel', listSchema);

let methods = {
    save: (obj) => {
      let listDocument = new ListModel({
        quantity: obj.quantity,
        description: obj.description
      })
      listDocument.save(function (err) {
        if (err) return console.error(err);
      });
    },
    find: (callback) => {
      ListModel.find(callback);
    },
    
    findItem: (body, callback) => {
      ListModel.find(callback).where('description').equals(body.description);
      // return data;
    },
    update: (body, callback) => {
      var query = { description: body.description };
      Model.update(query, { quantity: body.quantity }, options, callback)
    }
  }

  module.exports.methods = methods;

  // findUser: (username, callback) => {
  //   // Repo.find(callback).where('username').equals(username).limit(25);
  //   // return data;
  // }