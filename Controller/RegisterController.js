const Worker = require('../Model/Worker');
const User = require('../Model/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UnitModel = require('../Model/Unit')

const RegisterWorker = async (req, res) =>
{
    try
    {
        const { FirstName, LastName, PhoneNumber, Email, Unit, Password, ConfirmPassword } = req.body;
        console.log(req.body);

        if (!FirstName || !LastName || !PhoneNumber || !Email || !Unit || !Password || !ConfirmPassword)
        {
            return res.status(400).json("All fields are required");
        }

        const existingPhoneNumber = await Worker.findOne({ PhoneNumber: PhoneNumber }).exec()
        const existingEmail = await Worker.findOne({ Email: Email }).exec()
        if (existingPhoneNumber || existingEmail)
        {

            return res.status(400).json({ message: "Email or phone number already exists" });
        }
        if (Password !== ConfirmPassword)
        {
            return res.status(400).json({ message: 'Passwords do not match' });
        }
        // Encrypt password
        const hashedPwd = await bcrypt.hash(Password, 10);
        // Create new user
        const newUser = new User({
            Email,
            Password: hashedPwd,
            Role: 'Worker',
            CreatedAt: new Date()
        });
        // Save the user to the database
        const savedUser = await newUser.save();
        const SelectedUnit = await UnitModel.findById(Unit)
        if (!SelectedUnit)
        {
            return res.status(400).json({ message: 'Invalid unit selected' });
        }
        const newWorker = new Worker({
            FirstName,
            LastName,
            PhoneNumber,
            Email,
            Unit: SelectedUnit._id
        });

        await newWorker.save();

        return res.status(200).json({ message: "Registration successful", newWorker });
    } catch (error)
    {
        console.log(error);
        return res.status(500).json({ message: "an error occurred" });
    }
};



const handleWorkerLogin = async (req, res) =>
{
    try
    {
        const { Email, Password } = req.body;
        console.log(req.body);
        if (!Email || !Password) return res.status(400).json({ 'message': 'username and password are required' })
        const foundUser = await User.findOne({ Email: Email }).exec();

        if (!foundUser) return res.sendStatus(401); //unauthorized
        // evaluate password
        const match = await bcrypt.compare(Password, foundUser.Password);

        if (match && foundUser.Role == "Worker")
        {
            const accessToken = jwt.sign(
                {
                    UserInfo: {
                        userId: foundUser._id,
                        email: foundUser.Email
                    }
                },

                process.env.ACCESS_TOKEN_WORKER,
                { expiresIn: '30m' });

            // Set HTTP-only cookie with the token
            res.cookie("accessToken", accessToken, {
                httpOnly: true,
                sameSite: "None",
                secure: true,
                maxAge: 24 * 60 * 60 * 1000
            });

            const worker = await Worker.findOne({ Email: Email }).populate('Unit').exec();
            console.log(worker)
            return res.status(200).json({ accessToken, worker });
        }

        else
        {
            return res.status(401).json({ message: "Unauthorized" });
        }

    }
    catch (error)
    {
        console.error(error);

        return res.status(500).json({ message: "Something went wrong" });
    }
}



module.exports = { RegisterWorker, handleWorkerLogin };
