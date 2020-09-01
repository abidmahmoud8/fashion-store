const knex = require('./../config/knex');

class CommandModel {

    static getAll() {
      return knex('command');
    }
    static getById(id) {
       return knex('command').where({id: id}).first();
    }
    static getByUser(id) {
      return knex('command').where({user_id: id}).select('*')
    }
    static insert(req) {
        return knex('command').insert(req)
    }
    static delete(id) {
        return knex('command').where({id, id}).del();
    }
    static update(id ,req) {
        return knex('command').update(req).where({id, id});
    }
}
module.exports = CommandModel

