'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

const FormPopUp = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState([]);
  function onCloseModal() {
    setOpenModal(false);
  }

  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        const {name, email, phonenumber, hobby} = e.target.elements;
        const res = await fetch(`http://localhost:5000/api/create-data`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name:name.value,
                email:email.value,
                phonenumber:phonenumber.value,
                hobby:hobby.value
            })
        });
        if(res.ok){
            const data = await res.json();
            setFormData([data]);
        }
        else{
            console.log("error while fetching response");
        }
    } catch (error) {
        console.log(error);
    }
    e.target.reset();
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>New Data</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">Add new data in the form</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Name" />
              </div>
              <TextInput
                id="text"
                type='text'
                name='name'
                placeholder="Shane watson"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your Email" />
              </div>
              <TextInput
                id="email"
                type='email'
                name='email'
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phonenumber" value="Your Phone Number" />
              </div>
              <TextInput
                id="phonenumber"
                type='tel'
                placeholder="888 888 8888"
                maxLength="10"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="hobby" value="Your Hobby" />
              </div>
              <TextInput
                id="hobby"
                placeholder="dance"
                required
              />
            </div>
            <div className="w-full flex justify-center">
              <Button type='submit' outline>Save</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormPopUp;