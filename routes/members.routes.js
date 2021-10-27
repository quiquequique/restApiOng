const express = require('express');

const router = express.Router();

const {
	addNewMember,
	editMemberByID,
	getAllMembers,
	deleteMemberById,
} = require('../controllers/members.contoller');
const { addMemberValidator } = require('../middlewares/members.validator');
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
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/', getAllMembers);
router.post('/', [addMemberValidator], [isAuthenticated, isAdmin], addNewMember);
router.put('/:id', [isAuthenticated, isAdmin], editMemberByID);
router.delete('/:id', [isAuthenticated, isAdmin], deleteMemberById);

module.exports = router;
