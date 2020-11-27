import responses from '../../services/utility/responses';
import { isObjectLiteral, isStringLiteral } from '../../services/utility/util';
import removeItemFromObject from '../../services/utility/objectItemRemover';
const {PROPERTY_REQUIRED, SHOULD_BE} = responses;

const item = (req: any, res: any)=>{
    const {data, item} = req.body;
    if(!data) return res.status(400).json({response: `${PROPERTY_REQUIRED} 'data'`})
    if(!item) return res.status(400).json({response: `${PROPERTY_REQUIRED} 'item'`})

    if(!isObjectLiteral(data)) return res.status(400).json({response: `'data' ${SHOULD_BE}n object`})
    if(!isStringLiteral(item)) return res.status(400).json({response: `'item' ${SHOULD_BE} string`})

    const response = removeItemFromObject(data, item)
    res.status(200).json({
        response
    })
}

export default item
