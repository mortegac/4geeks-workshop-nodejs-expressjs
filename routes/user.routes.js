const express = require('express')
const router = express.Router()
// const { , verifiedAuth } = require('../midlewares/authToken.midleware')
const { createTokenAuth } = require('../utils');
const user = require('../dataMock/user.json')



router.post('/login', async (req, res, next)=>{
	
	const { username, password } = req.body;
	
	
	const dataUser = {
		user:username,
		name:"Manu",
		email:"mortega@4geeks.co",
	}
	
	const token = createTokenAuth(dataUser)
	
	return res.status(200).json(token);

});
router.get('/', async (req, res) => {
    
    try {
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({ message: error })
    }  
})



router.post('/', async (req, res) => {
    
	try {
		const { body } = req;
		    res.status(201).json({body: body});
			
	} catch (error) {
			res.status(500).json({ message: error })
	}  
})

router.put('/', async (req, res) => {
    
	try {
		const { body } = req;
		    res.status(200).json({body: body});
			
	} catch (error) {
			res.status(500).json({ message: error })
	}  
})


router.delete('/:id', (req, res)=>{
    let { id } = req.params;

    res.status(200).json({idDeleted: id});

})



module.exports = router