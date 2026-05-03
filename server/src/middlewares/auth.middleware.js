import userModel from '../models/user.models.js';
import jwt from 'jsonwebtoken';

async function authMiddleware(req, res, next){
    // Get token from cookies or Authorization header
    //req.cookies.token is used to access the token stored in cookies, while req.headers.authorization is used to access the token sent in the Authorization header. The split(" ")[1] part is used to extract the token from the "Bearer <token>" format commonly used in Authorization headers.
    // Optional chaining (?.) allows safe access to nested properties without throwing errors if an intermediate value is null or undefined.
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token){
        return res.status(401).json({
            message:"Unauthorized. No token provided."
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        return next();
    }

    catch(err){
        return res.status(401).json({
            message:"Unauthorized. Invalid token."
        })
    }
}

export default authMiddleware;
