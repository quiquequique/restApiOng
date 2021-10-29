/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

// eslint-disable-next-line import/no-unresolved
const { getOrganization, updateOrganization } = require('../Services/dbOrganization.services');

const errors = require('../helpers/resError.helper');


const controller = {

  getOne: async (req, res) => {
    try {
      const organizations = await getOrganization();

      return res.status(200).json(organizations);
    } catch (error) {
      console.log({ message: error }); // prep salida a biblioteca de logs (logger)

      return res.status(500).json(errors._500);
    }
  },
  patchOne: async (req, res) => {
    try {
      const id = req.params.id;
      const bodyData = req.body;
      console.log(bodyData.image);
      // console.log(bodyData.urlInsta);
      // console.log(JSON.parse(bodyData.image));
      const updateOrg = await updateOrganization(bodyData, id);
      if (updateOrg !== null) {
        return res.json(updateOrg);
      }
      return res.status(404).json(errors._404);
    } catch (error) {
      console.log(error); // prep salida a biblioteca de logs (logger)

      return res.status(500).json(errors._500);
    }
  }
};

module.exports = controller;
