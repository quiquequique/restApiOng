const { Category } = require('../models');
const errors = require( '../helpers/resError.helper')

const categoryExist = async ( id ) => {

  const exist = await Category.findByPk( id );

  return exist ? true : false;

};

const categoryDelete = async ( id ) => {

  try{

    const exist = await categoryExist( id );

    if( exist ){

      const categoryDestroy = await Category.destroy( { where: { id } } );

      return categoryDestroy;

    }else{

      return this.categoryDestroy = 0;

    };

  }catch( error ){

    console.log( error );

    res.status(500).json( errors._500 );

  };

};


module.exports = {
  categoryExist,
  categoryDelete
};