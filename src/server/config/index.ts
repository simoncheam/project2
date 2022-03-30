import * as dotenv from 'dotenv';

dotenv.config();

export const database_config = {   

   database: process.env.DB_NAME,
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD
};

export const jwt_config = {

	secret: process.env.JWT_SECRET,
	expiration: process.env.JWT_EXPIRATION
};

export default {
   
	
	jwt_config,
	database_config
};