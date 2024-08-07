const EventModel = require('../Model/Event')

const CreateEvent = async (req, res) => 
    {
        try
        {
            const { Name, Description, Date } = req.body;
    
            var eventExists = await EventModel.findOne({ 
                $and: [
                    { Name: Name }, 
                    { Date: Date }
                ]
            });
            
            if (eventExists) {
                return res.status(404).json({ message: "Event already exists" });
            }
            
            var newEvent = new EventModel(
                {
                    Name: Name,
                    Description: Description,
                    Date: Date
                })
    
            await newEvent.save();
            return res.status(200).json({ message: "Success", newEvent })
        }
        catch (error)
        {
            console.log(error)
            return res.status(500).json({ message: "An error occurred" });
        }
    
    }

    module.exports = { CreateEvent }