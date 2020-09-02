const knex = require('./../config/knex');

class CategoryModel {
    static getAll() {
      return knex('categories');
    }
    static getById(id) {
      return knex('categories').where({id: id}).first()
    }
    static getByMany(id) {
      return knex('categories').where({parent_id: id}).select('*')
    }
    static getByGender(gendre) {
      return knex('categories').where({gendre: gendre}).select('*')
    }
    static getByItems(id) {
      return knex.select('*').from('categories').join('item_category', function() {
        this.on('categories.id', '=', 'item_category.category_id').onIn('item_category.item_id', id)
      })
    }
    
    static insert(req, res) {
      return knex('categories').insert(req)
    }
    static delete(id) {
        return knex('categories').where({id, id}).del();
    }
    static update(id ,req) {
        return knex('categories').update(req).where({id, id});
    }
}
module.exports = CategoryModel