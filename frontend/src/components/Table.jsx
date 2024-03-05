"use client";
import { useState, useEffect } from "react";
import { Button, Checkbox, Label, Modal, TextInput, Table } from 'flowbite-react';
const TableComponent = () => {
  const [tableData, setTableData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  function onCloseModal() {
    setOpenModal(false);
    setSelectedId(null);
  }
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/get-data", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (res.ok) {
          const data = await res.json();
        setTableData(data.map((item, index) => ({ ...item, serialNumber: index + 1 })));

        }
      } catch (error) {}
    };
    fetchedData();
  }, [tableData]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/delete-data/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        const data = await res.json();
        setTableData(data.map((item, index) => ({ ...item, serialNumber: index + 1 })));

      }
    } catch (error) {}
  };

  const handleUpdate = (data) => {
    setFormData(data); 
    setSelectedId(data._id); 
    setOpenModal(true); 
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, phonenumber, hobby } = e.target.elements;
      const res = await fetch(`http://localhost:5000/api/update-data/${selectedId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          phonenumber: phonenumber.value,
          hobby: hobby.value,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setFormData(data);
        setTableData(data.map((item, index) => ({ ...item, serialNumber: index + 1 })));
        
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
    setOpenModal(false);
    e.target.reset();
  };
  const handleSend = () => {

  }

  return (
    <div className="overflow-x-auto">
      <Button gradientDuoTone='greenToBlue' outline onClick={handleSend}>Send Selected Data</Button>
      <Table hoverable className="mt-5">
        <Table.Head>
          <Table.HeadCell>Select</Table.HeadCell>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Phone Number</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Hobbies</Table.HeadCell>
          <Table.HeadCell>Update / Delete</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {tableData &&
            tableData.map((data) => (
              <Table.Row key={data._id}>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>{data.serialNumber}</Table.Cell>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.phonenumber}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>{data.hobby}</Table.Cell>
                <Table.Cell className="flex gap-2">
                  <Button
                    color="success"
                    outline
                    onClick={() => handleUpdate(data)}
                  >
                    Update
                  </Button>
                  {openModal ? (
                    <Modal
                      show={openModal}
                      size="md"
                      onClose={onCloseModal}
                      popup
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <form
                          className="space-y-6"
                          onSubmit={handleSubmit}
                        >
                          <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
                            Update data
                          </h3>
                          <div>
                            <div className="mb-2 block">
                              <Label htmlFor="name" value="Your Name" />
                            </div>
                            <TextInput
                              id="text"
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
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
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="name@example.com"
                              required
                            />
                          </div>
                          <div>
                            <div className="mb-2 block">
                              <Label
                                htmlFor="phonenumber"
                                value="Your Phone Number"
                              />
                            </div>
                            <TextInput
                              id="phonenumber"
                              type="tel"
                              name="phonenumber"
                              value={formData.phonenumber}
                              onChange={handleChange}
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
                              type="text"
                              name="hobby"
                              value={formData.hobby}
                              onChange={handleChange}
                              placeholder="dance"
                              required
                            />
                          </div>
                          <div className="w-full flex justify-center">
                            <Button type="submit" outline>
                              Update Data
                            </Button>
                          </div>
                        </form>
                      </Modal.Body>
                    </Modal>
                  ) : (
                    ""
                  )}
                  <Button
                    color="failure"
                    outline
                    onClick={() => handleDelete(data._id)}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TableComponent;
