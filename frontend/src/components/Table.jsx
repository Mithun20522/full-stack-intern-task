
'use client';

import { Checkbox, Table, Button } from 'flowbite-react';

const TableComponent = () => {
  return (
    <div>
        <Table hoverable className='mt-10'>
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
                <Table.Row>
                    <Table.Cell>
                        <Checkbox/>
                    </Table.Cell>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>virat</Table.Cell>
                    <Table.Cell>128948484</Table.Cell>
                    <Table.Cell>virat@gmail.com</Table.Cell>
                    <Table.Cell>cricket</Table.Cell>
                    <Table.Cell className='flex gap-2'>
                        <Button color='success' outline>Update</Button>
                        <Button color='failure' outline>Delete</Button>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </div>
  );
}

export default TableComponent;