'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

const FormPopUp = () => {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>New Data</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
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
                pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                maxlength="10"
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
              <Button outline>Save</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormPopUp;