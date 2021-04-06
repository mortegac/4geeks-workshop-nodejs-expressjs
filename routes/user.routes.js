const express = require('express')
const router = express.Router()
const { verifiedAuth } = require('../midlewares/authToken.midleware')
const { createTokenAuth } = require('../utils');
const user = require('../dataMock/user.json')



router.post('/token', async (req, res, next)=>{
	
	const { email, password } = req.body;
	
	
	const dataUser = {
		user:email,
		name:"Manu",
		email:"mortega@4geeks.co",
	}
	
	const token = createTokenAuth(dataUser)
	
	return res.status(200).json(token);

});
router.get('/', verifiedAuth, async (req, res) => {
    
    try {
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({ message: error })
    }  
})



router.post('/', verifiedAuth, async (req, res) => {
    
	try {
		const { body } = req;
		    res.status(201).json({body: body});
			
	} catch (error) {
			res.status(500).json({ message: error })
	}  
})

router.put('/', verifiedAuth, async (req, res) => {
    
	try {
		const { body } = req;
		    res.status(200).json({body: body});
			
	} catch (error) {
			res.status(500).json({ message: error })
	}  
})


router.delete('/:id', verifiedAuth, (req, res)=>{
    let { id } = req.params;

    res.status(200).json({idDeleted: id});

})



module.exports = router