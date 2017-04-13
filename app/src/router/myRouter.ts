import * as express from 'express';
import { appController } from '../controller/myController';

const router = express.Router();


router.get('/username/:username',  function (req: express.Request, res: express.Response) {
	appController.getUserDetail(req, res, req.params.username)
});



export default router;


