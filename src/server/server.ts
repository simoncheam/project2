import * as express from 'express';
import * as path from 'path';
import routes from './routes';

const app = express();

//import { configurePassport } from '../server/middleware/passport-strats.mw'
//configurePassport(app);

app.use(express.json());
app.use(express.static('public'));
app.use(routes);

app.get('*', (req, res) => { res.sendFile(path.join(__dirname, '../public/index.html')) });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
