var ProfileController = require('./profileController')
var Promise = require('bluebird')


module.exports = {
  currentUser: function(req){

    return new Promise(function(resolve, reject){
      if(req.session == null){
        resolve(null)
        return
      }
      if(req.session.user == null){
        resolve(null)
        return
      }
      ProfileController.getById(req.session.user, function(err, result){
        if(err){
          reject(err)
          return
        }
          resolve(result)
      })
    })
  }
}
