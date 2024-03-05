"use client";
import { useState, useEffect } from "react";
import { Checkbox, Table, Button } from "flowbite-react";
const TableComponent = ({setOpenModal}) => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/get-data", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (res.ok) {
          const data = await res.json();
          setTableData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, [tableData]);

const handleDelete = async(id) => {
    try {
        const res = await fetch(`http://localhost:5000/api/delete-data/${id}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        if(res.ok){
            const data = await res.json();
            setTableData(data);
        }
    } catch (error) {
        
    }
}

const handleUpdate = async(id) => {
    try {
        setOpenModal(true);
        const res = await fetch(`http://localhost:5000/api/update-data/${id}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'}
        })
        if(res.ok){
            const data = await res.json();
            // setTableData(data);
            console.log(data);
        }
    } catch (error) {
        
    }
}

  return (
    <div>
      <Table hoverable className="mt-10">
        <Table.Head>
          <Table.HeadCell>Select</Table.HeadCell>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Phone Number</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Hobbies</Table.HeadCell>
          <Table.HeadCell>Update / Delete</Table.HeadCell>
        </Table.Head>
        <Table.Body >
            {
                tableData && tableData.map((data) => (
                    <Table.Row key={data._id}>
                    <Table.Cell>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>{data.name}</Table.Cell>
                    <Table.Cell>{data.phonenumber}</Table.Cell>
                    <Table.Cell>{data.email}</Table.Cell>
                    <Table.Cell>{data.hobby}</Table.Cell>
                    <Table.Cell className="flex gap-2">
                      <Button color="success" outline onClick={() => handleUpdate(data._id)}>
                        Update
                      </Button>
                      <Button color="failure" outline onClick={() => handleDelete(data._id)}>
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))
            }
            </Table.Body>
      </Table>
    </div>
  );
};

export default TableComponent;
