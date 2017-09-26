import superagent from 'superagent'
import Promise from 'bluebird'

export default {
    get: (url, params) => {
      return new Promise((resolve, reject) => {

        superagent
        .get(url)
        .query(params)
        .set('Accept', 'application/json')
        .end((err, response) => {
          if(err){
            reject(err)
            return
          }
          if(response.body.confirmation != 'success'){
            reject(new Error(response.body.message))
            return
          }
          resolve(response.body)
        })
      })
    },

    post: (url, params) => {
      return new Promise((resolve, reject) => {
        superagent
        .post(url)
        .send(params)
        .set('Accept', 'application/json')
        .end((err, response) => {
          if(err){
            reject(err)
            return
          }
          if(response.body.confirmation != 'success'){
            reject(new Error(response.body.message))
            return
          }
          resolve(response.body)
        })
      })
    },

handlePut: (url, params) => {
  return new Promise((resolve, reject) => {
    superagent
    .put(url)
    .send(params)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err){
        reject(err)
        return
      }
      if(response.body.confirmation != 'success'){
        reject(new Error(response.body.message))
        return
      }
      resolve(response.body)
    })
  })
},

handleDelete: (endpoint) => {
  return new Promise((resolve, reject) => {
    superagent
    .delete(endpoint)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err){
        reject(err)
        return
      }

      const json = res.body
      if (json.confirmation != 'success'){
        reject(new Error(json.message))
          return
      }

      resolve(json)
    })
  })
}


}
