import { Router, json } from 'express';
import validator from "../services/utility/validator/validator";
import responses from '../services/utility/responses';
import { isObjectLiteral, isArrayLiteral } from '../services/utility/util';
const {PROPERTY_REQUIRED, SHOULD_BE} = responses;

const router = Router();
router.use(json());

router.post('/validate', (req, res)=>{
    const {data, rules} = req.body;
    if(!data) return res.status(400).json({response: `${PROPERTY_REQUIRED} 'data'`})
    if(!rules) return res.status(400).json({response: `${PROPERTY_REQUIRED} 'rules'`})

    if(!isObjectLiteral(data)) return res.status(400).json({response: `'data' ${SHOULD_BE} object`})
    if(!isArrayLiteral(rules)) return res.status(400).json({response: `'rules' ${SHOULD_BE} array`})

    const response = validator(data, rules)
    res.status(200).json({
        response
    })
})

export default router;
