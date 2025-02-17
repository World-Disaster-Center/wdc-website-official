import {Request,Response} from 'express'
import Professional from '../models/professionalModel'

export const registerProfessional = async (req: Request, res: Response):Promise<any> => {
    try{
        const { email, password, firstName, lastName, phoneNumber, dateOfBirth, sex, maritalStatus, dependents, countryOfResidence, citizenship, motivationStatement, resume } = req.body;

        const existingUser = await Professional.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const newUser = new Professional({
            firstName,
            lastName,
            email: [email],
            password,
            phoneNumber: [phoneNumber],
            dateOfBirth,
            sex,
            maritalStatus,
            dependents,
            countryOfResidence,
            citizenship,
            motivationStatement,
            resume
        });

        newUser.setJwtToken();
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error });
    }
};
export const loginProfessional = async (req: Request, res: Response):Promise<any> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(403).json("Please add an email and a password");
        }

        const user = await Professional.findOne({ email });
        if (!user) {
            return res.status(400).json("Invalid credentials");
        }

        const isValid = await user.comparePassword(password);
        if (!isValid) {
            return res.status(400).json("Invalid credentials");
        }        
        user.setJwtToken();
        res.status(200).json("Successfully logged in")
    } catch (error) {
        res.status(400).json(error)
    }
}