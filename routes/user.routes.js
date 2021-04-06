const express = require('express')
const router = express.Router()

const user= [
	{ "name": "Tulio", "lastName": "Triviño" },
	{ "name": "Guaripolo", "lastName": "" },
	{ "name": "Juanin", "lastName": "Jan Jarri" },
	{ "name": "Juan Carlos", "lastName": "Bodoque" },
	{ "name": "Estrella", "lastName": "de Lana" },
]


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