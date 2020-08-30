const knex = require('./../config/knex');

class CommandLineModel {
    constructor(table) {
        this.table = table;
    }
    static getAll() {
      return knex(this.table);
    }
    static getById(id) {
       return knex(this.table).where({command_id: id}).select('*')
     }
    static insert(req) {
        return knex(this.table).insert(req)
    }
    static delete(id) {
        return knex(this.table).where({id, id}).del();
    }
    static update(id ,req) {
        return knex(this.table).update(req).where({id, id});
    }
}
module.exports = CommandLineModel