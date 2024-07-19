const Department = require('../Model/Departments')
const Unit = require('../Model/Unit')

const CreateDepartment = async(req, res) => 
{
    try
    {
        const { Name, Description, DepartmentCode } = req.body;
      
        var DepartmentExists = await Department.findOne({ Name : Name})
        if(DepartmentExists)
        {
            return res.status(404).json({message: "Department already exists"});
        }
        var DepartmentCodeExists = await Department.findOne({ DepartmentCode : DepartmentCode})
        if(DepartmentCodeExists)
        {
            return res.status(404).json({message: "Department Code already exists"});
        }

        var newDepartment = new Department(
        {
            Name: Name,
            Description: Description,
            DepartmentCode : DepartmentCode
        })

        await newDepartment.save();
        return res.status(200).json({message: "Success", newDepartment})
    }
    catch(error)
    {
        console.log(error)
        return res.status(500).json({message: "An error occurred"});
    }

}

const CreateUnit = async(req, res) => 
    {
        try
        {
            const { Name, UnitCode, Description, DepartmentId } = req.body;
          
            var UnitExists = await Unit.findOne({ Name : Name})
            if(UnitExists)
            {
                return res.status(404).json({message: "Unit already exists"});
            }
            var UnitCodeExists = await Unit.findOne({ UnitCode : UnitCode})
            if(UnitCodeExists)
            {
                return res.status(404).json({message: "Unit Code already exists"});
            }
            var validDepartment = await Department.findOne({ _id : DepartmentId})
            if(!validDepartment){
                return res.status(404).json({message: "Invalid department selected"});
            }
            var newUnit = new Unit(
            {
                Name: Name,
                Description: Description,
                UnitCode : UnitCode,
                Department: validDepartment._id
            })
    
            await newUnit.save();
            return res.status(200).json({message: "Success", newUnit})
        }
        catch(error)
        {
            console.log(error)
            return res.status(500).json({message: "An error occurred"});
        }
    
    }

    const GetUnit = async(req, res) => 
        {
            try
            {
                const { Id } = req.params;
              
                var UnitExists = await Unit.findById(Id).populate('Department');
                if(!UnitExists)
                {
                    return res.status(404).json({message: "Unit not found"});
                }

                return res.status(200).json({message: "Success", UnitExists})
            }
            catch(error)
            {
                console.log(error)
                return res.status(500).json({message: "An error occurred"});
            }
        
        }

        const GetDepartment = async(req, res) => 
        {
            try
            {
                const { Id } = req.params;
              
                var DepartmentExists = await Department.findById(Id)
                if(!DepartmentExists)
                {
                    return res.status(404).json({message: "Department not found"});
                }

                return res.status(200).json({message: "Success", DepartmentExists})
            }
            catch(error)
            {
                console.log(error)
                return res.status(500).json({message: "An error occurred"});
            }
        
        }


        module.exports = { CreateDepartment, CreateUnit, GetUnit, GetDepartment }