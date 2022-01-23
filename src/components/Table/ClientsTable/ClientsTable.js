import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'reactstrap';
import { MdDeleteOutline } from 'react-icons/md';
import '../../style/style.css';
import Swal from 'sweetalert2';

const ClientsTable = () => {

    const [clients, setClients] = useState([]);
    // fetch api


    useEffect(() => {
        fetch('https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba')
            .then(res => res.json())
            .then(data => setClients(data.clients))
    }, []);

    // delte client function

    const handleDeletClient = id => {

        // sweet alert
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5E72E4',
            cancelButtonColor: 'red',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const remainingClients = clients.filter(client => client.id !== id);
                setClients(remainingClients);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })


    };





    return (

        <Container className='shadow p-3' style={{ marginTop: -50, zIndex: '+8888' }}>

            <h5 className='fw-bold mb-4 mt-2'>Light Table</h5>

            <Table responsive>
                <thead>
                    <tr>

                        <th>
                            Name
                        </th>
                        <th>
                            Company
                        </th>
                        <th>
                            Order Id
                        </th>
                        <th>
                            InvoicePaid
                        </th>
                        <th>
                            InvoicePending
                        </th>
                        <th>
                            Action
                        </th>

                    </tr>
                </thead>

                {
                    clients?.length === undefined ?

                        <Spinner />

                        :
                        <tbody>

                            {
                                clients?.map(client => <tr key={client.id}>
                                    <td>
                                        {client.name}
                                    </td>
                                    <td>
                                        {client.company}
                                    </td>
                                    <td>
                                        {client.orderId}
                                    </td>
                                    <td>
                                        {client.invoicepaid}
                                    </td>
                                    <td>
                                        {client.invoicePending}
                                    </td>
                                    <td >
                                        <MdDeleteOutline
                                            onClick={() => handleDeletClient(client.id)}
                                            type="button"
                                            className='fs-5'
                                        />
                                    </td>

                                </tr>)
                            }



                        </tbody>}
            </Table>

        </Container >
    );
};

export default ClientsTable;