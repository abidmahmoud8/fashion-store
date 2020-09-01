const knex = require('./../config/knex');

class CommandLineModel {
    static getAll() {
      return knex('commandline');
    }
    static getById(id) {
       return knex('commandline').where({id: id}).first()
     }
    static getByCommandId(id) {
       return knex('commandline').where({command_id: id}).select('*')
     }
    static insert(req) {
        return knex('commandline').insert(req)
    }
    static delete(id) {
        return knex('commandline').where({id, id}).del();
    }
    static update(id ,req) {
        return knex('commandline').update(req).where({id, id});
    }
}
module.exports = CommandLineModel