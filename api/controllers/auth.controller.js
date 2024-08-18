import User from '../model/user.model.js';
import bcryptsjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') 
        {
            next(errorHandler(400, 'All the fields are required!'));
        }

    const hashedPassword = bcryptsjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password:hashedPassword,
    });

    try {        
        await newUser.save();
        res.json( 'Signup successul');
    } catch (error) {
        next(error);
    }

};