const Worker = require('../Model/Worker');

const RegisterWorker = async (req, res) =>
{
    try
    {
        const { FirstName, LastName, PhoneNumber, Email, DOB, Department } = req.body;

        if (!FirstName || !LastName || !PhoneNumber || !Email || !DOB || !Department)
        {
            return res.status(400).json("All fields are required");
        }

        const existingPhoneNumber = await Worker.findOne({ PhoneNumber: PhoneNumber }).exec()
        const existingEmail = await Worker.findOne({ Email: Email }).exec()
        if (existingPhoneNumber || existingEmail)
        {
            return res.status(400).json({ message: "Email or phone number already exists" });
        }
        const newWorker = new Worker({
            FirstName,
            LastName,
            PhoneNumber,
            Email,
            DOB,
            Department
        });

        await newWorker.save();

        return res.status(200).json({ message: "Registration successful", newWorker });
    } catch (error)
    {
        console.log(error);
        return res.status(500).json("An error occurred");
    }
};

module.exports = { RegisterWorker };
