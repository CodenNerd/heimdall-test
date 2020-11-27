import { Router, json } from 'express';
import validate from './controller/validate';
import item from './controller/item';
import aladdin from './controller/aladdin';

const router = Router();
router.use(json());

router.post('/validate', validate)

router.put('/item', item)

router.post('/aladdin', aladdin)

export default router;
