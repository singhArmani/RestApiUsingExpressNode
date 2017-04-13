import * as express from 'express';
import { appController } from '../controller/myController';

const router = express.Router();

//get user detail for 'username'
router.get('/username/:username',  function (req: express.Request, res: express.Response) {
	appController.getUserDetail(req, res, req.params.username)
});

//get all user details
router.get('/',  function (req: express.Request, res: express.Response) {
	appController.getAllUserDetail(req, res)
});




export default router;


