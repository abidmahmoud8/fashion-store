const knex = require('./../config/knex');

class UserModel {
    static getAll() {
      return knex('users');
    }
    static getById(id) {
        return knex('users').where({id: id}).first();
    }
    static getByEmail(email) {
       return knex('users').where({email: email}).first()
     }
    static insert(req) {
        return knex('users').insert(req)
    }
    static delete(id) {
        return knex('users').where({id, id}).del();
    }
    static update(id ,req) {
        return knex('users').update(req).where({id, id});
    }
}
module.exports = UserModel