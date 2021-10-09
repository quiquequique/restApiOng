const { Category } = require('../models/');

const categoryExist = async ( id ) => {

  const exist = await Category.findByPk( id );

  return exist ? true : false;

};

const categoryDelete = async ( id ) => {

    const categoryDestroy = await Category.destroy( { where: { id } } );

    return categoryDestroy;

};


module.exports = {
  categoryExist,
  categoryDelete
};