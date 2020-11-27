import responses from '../../services/utility/responses';
import { isArrayLiteral, isNumber } from '../../services/utility/util';
import doesAlladinCompleteMagicOdyssey from '../../services/utility/aladdinTravels';
const {PROPERTY_REQUIRED, SHOULD_BE, INCOHERENT_ARRAYS} = responses;

const aladdin = (req: any, res: any) => {
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
}

export default aladdin;
