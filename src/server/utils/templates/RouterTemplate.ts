/*


import * as express from 'express';
import { ReqUser } from '../../types';

const router = express.Router();

// users
    import { Users } from '../../types'
    import { ReqUser } from '../../types'
    import usersDB from '../../database/queries/users'
    import booksDB from '../../database/queries/books'

//categories
    import { tokenCheck } from '../../middleware/tokenCheck.mw';
    import { ReqUser } from '../../types';
    import categoriesDB from '../../database/queries/categories'


//books
    import { tokenCheck } from '../../middleware/tokenCheck.mw';
    import { ReqUser } from '../../types';
    import booksDB from '../../database/queries/books'


router.get('/', async (req, res) => {

    try {
       // const results = await DB.get_all();
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }

})

router.get('/:id', async (req, res) => {

    const id = Number(req.params.id);

    try {
       // const results = await DB.get_one_by_id();

       //does user exist check? if/else

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }
})

router.put('/:id', async (req: ReqUser, res) => {
    try {
        const id = Number(req.params.id);


       // const results = await DB.get_all();

       if (bookUpdateResults.affectedRows) {

            res.status(201).json({ message: "Updated Book!" }); //*tk

        } else {
            res.status(401).json({ message: "Not authorized!" }) //*tk;    
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }
})

router.post('/', async (req: ReqUser, res) => {

    //users
        const { name, email, password }: Users = req.body;
        
        //input validation

        if (!name || !email || !password) {  // input validation // 
        return res.status(400).json({ message: "Fill out everything!" })
    }

        if(!title || !author || !price || !categoryid ) { 
            return res.status(400).json({ message: "Fill out everything!" })
        }




    try {
       // const results = await DB.get_all();

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }
})

router.delete('/:id', async (req, res) => {

    const id = Number(req.params.id);


    try {
       // const results = await DB.destroy(id);

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }
})


// auth/register.ts       ------------------------


import * as jwt from 'jsonwebtoken';
import config, { jwt_config} from '../../config';
import usersDB from '../../database/queries/users';
import {Router} from 'express';
import { generateHash} from '../../utils/passwords'

const router = Router();

router.post('/', async (req, res) => {

        const newUser = req.body;

        try {
            
            // create new hash
            newUser.password = generateHash(newUser.password);

            //insert new user into db
            const result = await usersDB.create(newUser);

            result.insertId  // jwt needs userid for token

            console.log(result);

            //create new token
            const token = jwt.sign(

                {userid: result.insertId, email: newUser.email},
                config.jwt_config.secret,
                {expiresIn: jwt_config.expiration}
            );

            res.status(200).json({message: 'successful registration', token});

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error occurred during registration', error})
            
        }

})

export default router;



// auth/register.ts       ------------------------



// auth/login.ts       ------------------------

import * as jwt from 'jsonwebtoken'
import * as passport from 'passport';
import config from '../../config';
import { Router } from 'express';
import { ReqUser} from '../../types'

const router = Router();

router.post('/', passport.authenticate('local'), async ( req: ReqUser, res) => {

    try {
        
        const token = jwt.sign(
            { id: req.user.id, email: req.user.email},
            config.jwt_config.secret,
            {expiresIn: config.jwt_config.expiration}
            );
            
        console.log('--- INSIDE LOGIN.TS POST ROUTE!');
        console.log(`token : ${token}`);

        res.status(200).json({message: "successful login!", token});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: " login broke!", error})
    }

});



// auth/validate.ts       ------------------------

router.get('/', tokenCheck, async(req: ReqUser, res) => {

    res.status(200).json( {message: 'valid'});

})



//        ------------------------

*** DON'T FORGET!

export default router;


*/
