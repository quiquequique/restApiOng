const db = require( '../models' )


const controller = {

    getAll: async ( req, res ) => {

        const organizations = await db.Organization.findAll();

        return res.json( organizations );

    }
}

module.exports = controller;