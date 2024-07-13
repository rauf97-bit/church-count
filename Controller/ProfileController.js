const Worker = require('../Model/Worker')

const GetWorkerByPhoneNumber = async(req, res) => 
{
    try
    {
        const { PhoneNumber } = req.params;
    // Check phone number length
       var phoneLength = PhoneNumber.length;
       if(phoneLength !== 11)
       {
        return res.status(404).json({message: "Invalid phone number"});
       }

        var worker = await Worker.findOne({ PhoneNumber : PhoneNumber})
        if(!worker)
        {
            return res.status(404).json({message: "No user found"});
        }
        return res.status(200).json({message: "Success", worker})
    }
    catch(error)
    {
        console.log(error)
        return res.status(500).json({message: "An error occurred"});
    }

}

module.exports = { GetWorkerByPhoneNumber }