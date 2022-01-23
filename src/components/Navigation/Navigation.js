import React from 'react';
import { Container, Dropdown, DropdownToggle, Navbar } from 'reactstrap';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdLogout } from 'react-icons/md';
import { MdContentCopy } from 'react-icons/md';
import { RiAccountCircleLine } from 'react-icons/ri';
import '../style/style.css';
import LoginModal from '../Login/LoginModal/LoginModal';
import useFirebase from '../Hook/useFirebase';

const Navigation = () => {

    const { user, handleLogOut } = useFirebase();

    return (

        <Navbar
            style={{ height: 70, background: "#5e72e4", borderBottom: '1px solid #DEE2E6' }}
        >

            <Container className='d-flex align-items-center justify-content-between'>

                <article>
                    <input style={{ borderRadius: 25, border: 0, padding: 4 }} placeholder='Search...' type="text" />
                </article>

                {
                    user.email && <article>
                        <img width="40" className="rounded-circle" height="40" src={user?.photoURL} alt="" />
                        <small className='fw-bold text-light m-sm-2'>{user?.displayName}</small>
                    </article>
                }

                <article className='d-flex gap-3'>

                    <h6 className='fs-5 text-light'>
                        <IoMdNotificationsOutline />
                    </h6>

                    <h6 className='fs-5 text-light'>
                        <MdContentCopy />
                    </h6>

                    {!user.email ? <h6 className='fs-5 text-light' type="button">
                        <RiAccountCircleLine data-toggle="modal" data-target="#exampleModal" />
                    </h6>
                        :
                        <article>

                            <h6
                                onClick={handleLogOut}
                                type="button" className='fs-5 text-light'
                            >
                                <MdLogout />
                            </h6>

                        </article>}

                </article>


            </Container>

            {/* login modal */}
            <LoginModal />

        </Navbar>
    );
};

export default Navigation;