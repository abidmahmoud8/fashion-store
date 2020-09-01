const knex = require('./../config/knex');

class Item_CategoryModel {
    constructor(table) {
        this.table = table;
    }
    static getAll() {
      return knex('item_category');
    }
    static getById(id) {
       return knex('item_category').where({id: id}).first()
     }
    static insert(req) {
        return knex('item_category').insert(req)
    }
    static delete(id) {
        return knex('item_category').where({id, id}).del();
    }
    static update(id ,req) {
        return knex('item_category').update(req).where({id, id});
    }
}
module.exports = Item_CategoryModel