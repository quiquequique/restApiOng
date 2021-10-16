/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

// eslint-disable-next-line import/no-unresolved
const { getAllOrganization } = require('../services/dbOrganization');

const errors = require('../helpers/resError.helper');


const controller = {

  getAll: async (req, res) => {
    try {
      const organizations = await getAllOrganization();

      if (organizations.length !== 0) {
        const dataArray = [];
        for (const organization of organizations) {
          dataArray.push(
            {
              name: organization.name,
              image: organization.image,
              phone: organization.phone,
              address: organization.address
            }
          );
        }
        return res.json({

          meta: {

            status: '200',
            link: '/organization/public',
            count: organizations.length
          },
          data: dataArray
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
