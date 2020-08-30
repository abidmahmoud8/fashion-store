const knex = require('./../config/knex');

class CRUDItem {
    constructor(table) {
        this.table = table;
    }
    static getAll() {
      return knex(this.table);
    }
    static getById(id) {
       return knex(this.table).where({id: id}).select('*')
     }
     static getByCategory(id) {
        return knex.select('*').from(this.table).join('item_category', function() {
            this.on('items.id', '=', 'item_category.item_id').onIn('item_category.category_id', id)
          })
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
module.exports = CRUDItem

