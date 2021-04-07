import { Router } from "express";
const router = Router();
import user from '../dataMock/user.json';


router.get('/',  async (req, res) => {
    
    try {
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({ message: error })
    }  
})



router.post('/token',  async (req, res) => {
    
	try {
		const { body } = req;
		    res.status(201).json({body: body});
			
	} catch (error) {
			res.status(500).json({ message: error })
	}  
})

router.post('/',  async (req, res) => {
    
	try {
		const { body } = req;
		    res.status(201).json({body: body});
			
	} catch (error) {
			res.status(500).json({ message: error })
	}  
})

router.put('/',  async (req, res) => {
    
	try {
		const { body } = req;
		    res.status(200).json({body: body});
			
	} catch (error) {
			res.status(500).json({ message: error })
	}  
})


router.delete('/:id',  (req, res)=>{
    let { id } = req.params;

    res.status(200).json({idDeleted: id});

})



export default router;