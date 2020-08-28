const knex = require('./../config/knex');

class UserModel {
    constructor(table) {
        this.table = table;
    }
    static getAll() {
      return knex(this.table);
    }
    static getByEmail(email) {
       return knex(this.table).where({email, email}).first()
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
module.exports = UserModel