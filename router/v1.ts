import { Router, json } from 'express';
import validator from "../services/utility/validator/validator";

const router = Router();
router.use(json());

router.get('/validate', (req, res)=>{
    const temp = validator({bb: 's'}, ['j'])
    res.send('^_^')
})

export default router;
