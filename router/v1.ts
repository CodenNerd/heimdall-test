import { Router, json } from 'express';
import validator from "../services/utility/validator/validator";
import responses from '../services/utility/responses';
import { isObjectLiteral, isArrayLiteral, isStringLiteral } from '../services/utility/util';
import removeItemFromObject from '../services/utility/objectItemRemover';
const {PROPERTY_REQUIRED, SHOULD_BE} = responses;

const router = Router();
router.use(json());

router.post('/validate', (req, res)=>{
    const {data, rules} = req.body;
    if(!data) return res.status(400).json({response: `${PROPERTY_REQUIRED} 'data'`})
    if(!rules) return res.status(400).json({response: `${PROPERTY_REQUIRED} 'rules'`})

    if(!isObjectLiteral(data)) return res.status(400).json({response: `'data' ${SHOULD_BE}n object`})
    if(!isArrayLiteral(rules)) return res.status(400).json({response: `'rules' ${SHOULD_BE}n array`})

    const response = validator(data, rules)
    res.status(200).json({
        response
    })
})

router.put('/item', (req, res)=>{
    const {data, item} = req.body;
    if(!data) return res.status(400).json({response: `${PROPERTY_REQUIRED} 'data'`})
    if(!item) return res.status(400).json({response: `${PROPERTY_REQUIRED} 'item'`})

    if(!isObjectLiteral(data)) return res.status(400).json({response: `'data' ${SHOULD_BE}n object`})
    if(!isStringLiteral(item)) return res.status(400).json({response: `'item' ${SHOULD_BE} string`})

    const response = removeItemFromObject(data, item)
    res.status(200).json({
        response
    })
})

export default router;
