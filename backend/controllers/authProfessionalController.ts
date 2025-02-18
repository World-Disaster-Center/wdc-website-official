import {Request,Response} from 'express'
import Professional from '../models/professionalModel'

const testUserData = {
    firstName: 'John',
    middleName: 'Michael',
    lastName: 'Doe',
    dateOfBirth: new Date('1990-01-15'),
    phoneNumber: ['+1234567890', '+0987654321'],
    email: ['johndoe@example.com'],
    password: 'hashedpassword123', // Normally, this should be hashed
    profilePhoto: 'https://example.com/profile.jpg',
    linkedIn: 'https://linkedin.com/in/johndoe',
    sex: 'Male',
    maritalStatus: 'Single',
    dependents: 0,
    countryOfResidence: [{
        line1: '123 Test Street',
        line2: 'Apt 4B',
        city: 'Test City',
        state: 'Test State',
        country: 'Testland'
    }],
    citizenship: ['Testland'],
    bio: 'A passionate software engineer with expertise in web development.',
    education: [{
        institution: 'Test University',
        city: 'Test City',
        country: 'Testland',
        degreeLevel: 'Bachelor',
        attendedFrom: new Date('2010-09-01'),
        attendedTo: new Date('2014-06-30'),
        degreeName: 'BSc in Computer Science',
        attachment: 'https://example.com/degree.pdf'
    }],
    languages: [{
        name: 'English',
        native: true,
        proficiency: 'Fluent'
    }, {
        name: 'Spanish',
        native: false,
        proficiency: 'Intermediate'
    }],
    skills: [{
        name: 'JavaScript',
        proficiency: 'Expert'
    }, {
        name: 'React',
        proficiency: 'Advanced'
    }],
    certifications: [{
        courseName: 'Full-Stack Web Development',
        issuingOrganization: 'Test Academy',
        dateOfCertification: new Date('2022-08-01'),
        attachment: 'https://example.com/certification.pdf'
    }],
    trainings: [{
        trainingName: 'Cybersecurity Basics',
        issuingOrganization: 'Security Institute',
        dateOfTraining: new Date('2023-01-15'),
        attachment: 'https://example.com/training.pdf'
    }],
    experience: [{
        positionTitle: 'Software Engineer',
        from: new Date('2015-07-01'),
        to: new Date('2020-12-31'),
        employerName: 'TechCorp',
        employerAddress: '456 Tech Street, Tech City, Testland',
        typeOfOrganization: 'Technology',
        country: 'Testland',
        responsibilities: 'Developed and maintained web applications.',
        supervisorName: 'Jane Smith',
        skills: ['JavaScript', 'Node.js', 'React'],
        sectors: ['IT', 'Software Development']
    }],
    sectorInterests: ['Technology', 'Healthcare'],
    deployment: {
        preferredType: 'Remote',
        responseTime: 'Immediate',
        extendedAssignments: 'Yes',
        idealEmploymentLength: 'Permanent'
    },
    travelReadiness: {
        willingToTravel: true,
        passport: [{
            passportNumber: 'A123456789',
            dateOfIssue: new Date('2020-01-01'),
            expiryDate: new Date('2030-01-01'),
            attachments: ['https://example.com/passport.pdf']
        }],
        vaccination: [{
            name: 'COVID-19',
            attachment: 'https://example.com/vaccine.pdf',
            dateOfIssue: new Date('2021-06-15')
        }],
        nearestAirport: {
            name: 'Testland International Airport',
            city: 'Test City',
            country: 'Testland'
        },
        drivingLicense: {
            licenseNumber: 'DL123456789',
            dateOfIssue: new Date('2015-05-10'),
            expiryDate: new Date('2025-05-10'),
            attachment: 'https://example.com/license.pdf'
        }
    },
    emergencyContact: {
        firstName: 'Emily',
        middleName: 'Rose',
        lastName: 'Doe',
        relationship: 'Sister',
        phoneNumber: '+1122334455'
    },
    workRegions: ['North America', 'Europe'],
    source: 'LinkedIn',
    abuse: false,
    disability: false,
    motivationStatement: 'I am passionate about making an impact through technology.',
    resume: 'https://example.com/resume.pdf',
    references: [{
        fullName: 'Mark Taylor',
        country: 'Testland',
        organization: 'TechCorp',
        phoneNumber: '+4455667788',
        email: 'mark.taylor@example.com',
        referenceJobTitle: 'CTO'
    }],
    attachments: ['https://example.com/portfolio.pdf']
};
export const registerProfessional = async (req: Request, res: Response):Promise<any> => {
    try{
        const { 
            email,
            password, 
            firstName, 
            lastName, 
        } = req.body;
        console.log(req.body);
        if (!email || !password || !firstName || !lastName) {
            return res.status(403).json("Please fill all the mandatory fields");
        }//check email and so on

        const existingUser = await Professional.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const newUser = new Professional({
            ...testUserData
        });
        newUser.setJwtToken({userId: newUser._id}, res);
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
        // user.setJwtToken();
        res.status(200).json("Successfully logged in")
    } catch (error) {
        res.status(400).json(error)
    }
}