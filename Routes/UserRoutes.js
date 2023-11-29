const  express  = require('express')
const { GetAllMember, CreateMember, GetSingleMember, DeleteMember, UpdateMember } = require('../Controllers/userController')
const  Router  = express.Router()

Router.route('/').get(GetAllMember).post(CreateMember)
Router.route('/:id').get(GetSingleMember).delete(DeleteMember).put(UpdateMember)

module.exports = Router 