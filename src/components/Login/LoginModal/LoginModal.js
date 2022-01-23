import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Alert, Spinner } from 'reactstrap';
import useFirebase from '../../Hook/useFirebase';

const LoginModal = () => {

    const { handleGoogleSign, success, user, error, loading } = useFirebase();

    return (

        <div>


            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content " style={{ background: "#FFFFFF" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">welcome</h5>

                        </div>
                        <div className="modal-body d-flex justify-content-center">

                            <button
                                onClick={handleGoogleSign}
                                style={{ padding: 10, fontWeight: 500, background: '#FFFFFF', border: "2px solid #5E72E4" }}
                            >
                                <FcGoogle /> sign with google
                            </button>


                        </div>

                        {
                            success && <Alert> {success} </Alert>
                        }

                        {
                            error && <Alert color="danger">{error}</Alert>
                        }

                        {
                            loading ? <Spinner>Loading</Spinner>
                                : ''

                        }

                        <div className="modal-footer">

                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;