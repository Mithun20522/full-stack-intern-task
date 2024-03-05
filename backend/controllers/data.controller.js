import Form from "../models/data.model.js";

// create - data
export const createFormData = async (req, res) => {
    const { name, email, phonenumber, hobby } = req.body;
    if (!name || !email || !phonenumber || !hobby) {
        res.status(400).send('All fields are mandatory');
    } else {
        try {
            const newData = new Form({
                name: name,
                email: email,
                phonenumber: phonenumber,
                hobby: hobby
            });
            await newData.save();
            res.status(201).send(newData);
        } catch (error) {
            res.status(500).send('Internal server error');
        }
    }
}