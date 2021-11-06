const express = require('express');
const router = express.Router();
const {
	createMember,
	updateMemberByID,
	getAllMembers,
	deleteMemberById,
} = require('../controllers/members.controller');
const { addMemberValidator } = require('../middlewares/members.validator');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');
router.get('/', getAllMembers);
router.post('/', [isAuthenticated, isAdmin, addMemberValidator], createMember);
router.put('/:id', [isAuthenticated, isAdmin], updateMemberByID);
router.delete('/:id', [isAuthenticated, isAdmin], deleteMemberById);

module.exports = router;

/**
 * @swagger
 * components:
 *  schemas:
 *    Members:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        id:
 *          type: string
 *          description: a number that is unique for this member
 *        name:
 *          type: string
 *          description: name of the member
 *        facebookUrl:
 *          type: string
 *          description: facebook's account
 *        instagramUrl:
 *          type: string
 *          description: instagram's account
 *        linkedinUrl:
 *          type: string
 *          description: linkedin's account
 *        image:
 *          type: string
 *          description: img of the member
 *        description:
 *          type: string
 *          description: description of the member
 *      example:
 *        id: "1"
 *        name: "esteban quito"
 *        facebookUrl: "www.facebook.com/estebanquito"
 *        instagramUrl: "www.instagram.com/estebanquito"
 *        linkedinUrl: "www.linkedin.com/estebanquito"
 *        image: "www.fotolog/estebanquito/1"
 *        description: "new member"
 * */
/**
 * @swagger
 * tags:
 *   name: Members
 *   description: The Members managing API
 */
/**
 * @swagger
 * /members:
 *   get:
 *     summary: Returns the list of all the members
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: The list of the Members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Members'
 */
/**
 * @swagger
 * /members:
 *   post:
 *     summary: Create a new Member
 *     tags: [Members]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Members'
 *     responses:
 *       200:
 *         description: The Member was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Members'
 *       500:
 *         description: Some server error
 *       403:
 *         description: No authorization token was found.
 */
/**
 * @swagger
 * /members/{id}:
 *  put:
 *    summary: Update the Member by the id
 *    tags: [Members]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Member id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Members'
 *    responses:
 *      200:
 *        description: The Member was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Members'
 *      404:
 *        description: The Member was not found
 *      500:
 *        description: Some error happened
 *      403:
 *        description: No authorization token was found.
 */
/**
 * @swagger
 * /members/{id}:
 *   delete:
 *     summary: Remove the member by id
 *     tags: [Members]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Member id
 *
 *     responses:
 *       200:
 *         description: The Member was deleted
 *       403:
 *         description: No authorization token was found.
 *       404:
 *         description: The Member was not found
 */
