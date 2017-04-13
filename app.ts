import * as express from 'express';
import router from './app/src/router/myRouter'
const port = 8000;

const app = express();
app.use('/', router);

app.listen(port, () => {
    console.log('listening to the port ', port);
})