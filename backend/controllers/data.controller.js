import Form from "../models/data.model.js";

// create - data (C)
export const createFormData = async (req, res) => {
    const { name, email, phonenumber, hobby } = req.body;
    if (!name || !email || !phonenumber || !hobby) {
        return res.status(400).send('All fields are mandatory');
    } else {
        try {
            const newData = new Form({
                name: name,
                email: email,
                phonenumber: phonenumber,
                hobby: hobby
            });
            await newData.save();
            return res.status(201).send(newData);
        } catch (error) {
            return res.status(500).send('Internal server error');
        }
    }
}

// read data (R)
export const getFormData = async(req, res) => {
    try {
        const fetchedData = await Form.find();
        if(fetchedData.length === 0){
            return res.status(404).send('No data found');
        }
        else{
            return res.status(201).send(fetchedData);
        }
    } catch (error) {
        
    }
}

// update data (U)
export const updateFormData = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phonenumber, hobby } = req.body;
        const updatedData = await Form.findByIdAndUpdate(id, {
            name: name,
            email: email,
            phonenumber: phonenumber,
            hobby: hobby
        }, { new: true });
        if (!updatedData) {
            return res.status(404).send('Data not found');
        }
        return res.status(200).send(updatedData);
        
    } catch (error) {
        res.status(400).send('Internal server error');
    }
}