const knex = require('./../config/knex');
const { json } = require('body-parser');

class ItemModel {
    static getAll() {
      return knex('items');
    }
    static getById(id) {
       return knex('items').where({id: id}).select('*')
    }
    static getByCategory(id) {
      return knex.select('*').from('items').join('item_category', function() {
          this.on('items.id', '=', 'item_category.item_id').onIn('item_category.category_id', id)
        })
    }
    static insert(req) {
        return knex('items').insert(req)
    }
    static delete(id) {
        return knex('items').where({id, id}).del();
    }
    static update(id ,req) {
        return knex('items').update(req).where({id, id});
    }
}
module.exports = ItemModel

