import { Router } from 'express';
import { parseFile } from './controllers/csv-parser-controller';


const router = Router();

router.route('/:sentence').get(parseFile);


export default router;