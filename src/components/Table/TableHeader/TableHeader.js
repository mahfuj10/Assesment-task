import React from 'react';
import { Button, Container } from 'reactstrap';
import { AiOutlineHome } from 'react-icons/ai'

const TableHeader = () => {

    return (

        <section style={{ background: "#5E72E4", padding: 40, paddingBottom: 100, zIndex: -999 }}>

            <Container className='d-flex flex-wrap  justify-content-between'>

                <article className='bg-light mb-3 mb-md-0 rounded-3' style={{ width: 180, padding: '5px 15px' }}>
                    <h6><AiOutlineHome /> / Tables / Tables</h6>
                </article>

                <article>

                    <Button color="light" type="button" style={{ fontWeight: 500, color: "#5E72E4" }} >
                        New
                    </Button>

                    <Button className='ms-3' style={{ fontWeight: 500, color: "#5E72E4" }} color="light" type="button">
                        Filters
                    </Button>

                </article>

            </Container>
        </section>
    );
};

export default TableHeader;