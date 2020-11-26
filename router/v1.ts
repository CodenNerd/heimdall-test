import { Router, json } from 'express';
import validator from "../services/utility/validator/validator";
import responses from '../services/utility/responses';
import { isObjectLiteral, isArrayLiteral, isStringLiteral, isNumber } from '../services/utility/util';
import removeItemFromObject from '../services/utility/objectItemRemover';
import doesAlladinCompleteMagicOdyssey from '../services/utility/aladdinTravels';
const {PROPERTY_REQUIRED, SHOULD_BE, INCOHERENT_ARRAYS} = responses;

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

router.post('/aladdin', (req, res) => {
    const {n, magic, dist} = req.body;

    if(!n) return res.status(400).json({response: `${PROPERTY_REQUIRED} 'n'`})
    if(!magic) return res.status(400).json({response: `${PROPERTY_REQUIRED} 'magic'`})
    if(!dist) return res.status(400).json({response: `${PROPERTY_REQUIRED} 'dist'`})

    if(!isNumber(n)) return res.status(400).json({response: `'n' ${SHOULD_BE}n integer`})
    if(!isArrayLiteral(magic)) return res.status(400).json({response: `'magic' ${SHOULD_BE}n array`})
    if(!isArrayLiteral(dist)) return res.status(400).json({response: `'dist' ${SHOULD_BE}n array`})

    const _n = parseInt(n);
    if(magic.length != _n || dist.length != _n) return res.status(400).json({response: `${INCOHERENT_ARRAYS} (${_n})`})

    const response = doesAlladinCompleteMagicOdyssey(_n, magic, dist);
    res.status(200).json({
        response
    })
})

export default router;
