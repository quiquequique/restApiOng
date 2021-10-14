/* eslint-disable no-console */

const { getAllOrganization } = require('../services/dbOrganization');

const errors = require('../helpers/resError.helper');


const controller = {

  getAll: async (req, res) => {
    try {
      const organization = await getAllOrganization();

      if (organization.length !== 0) {
        return res.json({

          meta: {

            status: '200',
            link: '/organization/public',
            count: organization.length
          },
          data: {

            name: organization[0].name,
            image: organization[0].image,
            phone: organization[0].phone,
            address: organization[0].address

          }
        });
      }

      res.status(404).json(errors._404);
    } catch (error) {
      console.log({ message: error });

      res.status(500).json(errors._500);
    }
  }
};

module.exports = controller;