import validator from "../../services/utility/validator/validator";
import responses from '../../services/utility/responses';
import { isObjectLiteral, isArrayLiteral} from '../../services/utility/util';
const {PROPERTY_REQUIRED, SHOULD_BE} = responses;

const validate = (req: any, res: any)=>{
    const {data, rules} = req.body;
    if(!data) return res.status(400).json({response: `${PROPERTY_REQUIRED} 'data'`})
    if(!rules) return res.status(400).json({response: `${PROPERTY_REQUIRED} 'rules'`})

    if(!isObjectLiteral(data)) return res.status(400).json({response: `'data' ${SHOULD_BE}n object`})
    if(!isArrayLiteral(rules)) return res.status(400).json({response: `'rules' ${SHOULD_BE}n array`})

    const response = validator(data, rules)
    res.status(200).json({
        response
    })
}

export default validate
