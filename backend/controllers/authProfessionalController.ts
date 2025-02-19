import {Request,Response} from 'express'
import Professional from '../models/professionalModel'

export const registerProfessional = async (req: Request, res: Response):Promise<any> => {
    try{
        //Destructure request body
        const { 
            email,
            password, 
            firstName, 
            lastName,
            phoneNumber 
        } = req.body;

        //Check if all fields are filled
        if (!email || !password || !firstName || !lastName || !phoneNumber) {
            return res.status(403).json("Please fill all the mandatory fields");
        }
        //Email Validation
        const emailRegexTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
        if(!emailRegexTest.test(email)){
            return res.status(403).json("Please check your email")
        }
        //Password Validation: 
        const passwordRegexTest = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        if(!passwordRegexTest.test(password)){
            return res.status(403).json("Your password must contain at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character")
        }
        //Phone Number Validation
        const phoneRegexTest = /^(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?$/
        if(!phoneRegexTest.test(phoneNumber)){
            return res.status(403).json("Please check your phone number")
        } 
        //Check if user already exists
        const existingUser = await Professional.findOne({ email });
        if (existingUser){
            return res.status(400).json({ message: 'User already exists' });
        }
        //Create new user
        const newUser = new Professional({
            email,
            password, 
            firstName, 
            lastName,
            phoneNumber,
        });
        //Set JWT Token
        newUser.setJwtToken({userId: newUser._id}, res);
        //Save user
        await newUser.save();
        //Send response to client
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        //Send error to client
        res.status(500).json({ message: 'Something went wrong', error });
    }
};
export const loginProfessional = async (req: Request, res: Response):Promise<any> => {
    try {
        //Check if all fields are filled
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(403).json("Please add an email and a password");
        }
        //Check if user exists
        const user = await Professional.findOne({ email });
        if (!user) {
            return res.status(400).json("Invalid credentials");
        }
        //Check if password is correct
        const isValid = await user.comparePassword(password);
        if (!isValid) {
            return res.status(400).json("Invalid credentials");
        }        
        //Set JWT Token
        user.setJwtToken({userId: user._id},res);
        //Send response to client
        res.status(200).json("Successfully logged in")
    } catch (error) {
        //Send error to client
        res.status(400).json(error)
    }
}
//edit profile function