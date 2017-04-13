import * as express from 'express';
import { myService, userDetail, errorObject } from '../services/myService';

export class appController {

    public static getUserDetail(req: express.Request, res: express.Response, username: string) {
        //calling the services
        myService.getUserDetail(username)
        .then(result => {
            if (result.hasOwnProperty('firstName')) {
                this.successHandler(res, result);
            } else {
                this.errorHandler(res, result);
            }
        })
        .catch();
    }

    private static successHandler(res: express.Response, result: userDetail): express.Response {
        res.header("Access-Control-Allow-Origin", "*");
        return res.status(200).json(result);
    }

    private static errorHandler(res: express.Response, result: userDetail): express.Response {
        res.header("Access-Control-Allow-Origin", "*");
        return res.status(400).json(result);
    }
}