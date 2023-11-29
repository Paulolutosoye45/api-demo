const   Users  =   require('../Models/UserSchema')

const GetAllMember =  async (req,  res)=>{
    const   Students  =    await  Users.find({})
    res.status(200).json({Students})
}
const GetSingleMember = async (req,  res)=>{
    try{
        const { id }  = req.params
        const   FindUser   =  await Users.findOne({ _id: id })    
        res.status(201).json(FindUser)                  
    }  catch  (error){
        console.log(error.message)
       res.status(500).json({message:  error.message})
   }
}
const CreateMember = async   (req,   res)=>{
    try{
        const  createUser  =  await  Users.create(req.body) 
        res.status(201).json( createUser )
    }  catch  (error){
         console.log(error.message)
        res.status(500).json({message:  error.message})
    }
}
const UpdateMember = async  (req,  res)=>{
    try{
        const { id }  = req.params
        const   UpdatedUser   =  await Users.findByIdAndUpdate(id, req.body)   
        res.status(201).json(UpdatedUser)                  
    }  catch  (error){
        console.log(error.message)
       res.status(500).json({message:  error.message})
   }
}
const DeleteMember =   async (req,   res)=>{
    try{
        const { id }  = req.params
        const   deleteUser   =  await Users.deleteOne({ _id: id })    
        res.status(201).json(deleteUser)                  
    }  catch  (error){
        console.log(error.message)
       res.status(500).json({message:  error.message})
   }

}

module.exports={
    GetAllMember,
    GetSingleMember,
    CreateMember,
    UpdateMember,
    UpdateMember,
    DeleteMember,
}